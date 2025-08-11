import mongoose from "mongoose";
import axios from "axios";

// الاتصال بـ MongoDB
const MONGO_URI = "mongodb+srv://<adil>:<adilosizar111109>@cluster0.tfuppkw.mongodb.net/";
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

export default async function handler(req, res) {
  try {
    // 1. جلب الأخبار من مصدر مجاني
    const { data } = await axios.get("https://inshortsapi.vercel.app/news?category=technology");

    // 2. حفظ الأخبار الجديدة في قاعدة البيانات
    for (let item of data.data) {
      const exists = await News.findOne({ title: item.title });
      if (!exists) {
        await News.create({
          title: item.title,
          content: item.content,
          date: new Date()
        });
      }
    }

    // 3. جلب كل الأخبار من قاعدة البيانات (أحدث أولاً)
    const news = await News.find().sort({ date: -1 }).limit(20);

    // 4. إرسالها للواجهة
    res.status(200).json(news);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب الأخبار" });
  }
}
