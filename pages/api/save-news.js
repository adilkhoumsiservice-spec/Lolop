import mongoose from "mongoose";
import axios from "axios";

// الاتصال بـ MongoDB
const MONGO_URI = "mongodb+srv://<adil>:<adilosizar111109>@cluster0.tfuppkw.mongodb.net/?retryWrites=true&w=majority";
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

// موديل الأخبار
const NewsSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date
});
const News = mongoose.models.News || mongoose.model("News", NewsSchema);

// دالة إعادة الصياغة البسيطة
function rewriteText(text) {
  let synonyms = {
    "breaking": "urgent",
    "technology": "tech world",
    "says": "reports",
    "new": "latest",
    "launch": "release",
    "reveals": "shows"
  };

  let rewritten = text;
  for (let word in synonyms) {
    let regex = new RegExp(`\\b${word}\\b`, "gi");
    rewritten = rewritten.replace(regex, synonyms[word]);
  }

  // إضافة جملة ختامية لتغيير الصياغة
  return rewritten + " — تم تعديل هذا الخبر تلقائيًا.";
}

export default async function handler(req, res) {
  try {
    // 1. جلب الأخبار من المصدر
    const { data } = await axios.get("https://inshortsapi.vercel.app/news?category=technology");

    // 2. حفظ الأخبار الجديدة بعد إعادة صياغتها
    for (let item of data.data) {
      const exists = await News.findOne({ title: item.title });
      if (!exists) {
        const cleanContent = item.content.replace(/https?:\/\/[^\s]+/g, "");
        const rewrittenContent = rewriteText(cleanContent);

        await News.create({
          title: rewriteText(item.title.trim()),
          content: rewrittenContent.trim(),
          date: new Date()
        });
      }
    }

    // 3. جلب الأخبار من قاعدة البيانات (أحدث أولاً)
    const news = await News.find().sort({ date: -1 }).limit(50);

    // 4. إرسالها للواجهة
    res.status(200).json(news);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب الأخبار" });
  }
}
