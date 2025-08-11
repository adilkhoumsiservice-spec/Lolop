import axios from "axios";
import { MongoClient } from "mongodb";

// كود MongoDB URI
const MONGO_URI = "mongodb+srv://<adil>:<adilosizar111109>@cluster0.tfuppkw.mongodb.net/"; 
const DB_NAME = "newsdb"; // اسم قاعدة البيانات
let cachedClient = null;

// مفتاح API الخاص بـ OpenAI
const OPENAI_API_KEY = "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";

// الاتصال بـ MongoDB
async function connectToDatabase() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  try {
    // 1️⃣ جلب الأخبار من RSS
    const rssFeed = "https://feeds.bbci.co.uk/news/rss.xml"; // مثال
    const { data } = await axios.get(rssFeed);
    
    // هنا ضع كود استخراج الأخبار من XML أو استخدم مكتبة rss-parser
    // سأضع مثال بسيط
    const newsList = [
      { title: "عنوان خبر 1", link: "https://example.com/1" },
      { title: "عنوان خبر 2", link: "https://example.com/2" }
    ];

    // 2️⃣ تحسين النصوص باستخدام OpenAI
    const improvedNews = [];
    for (let news of newsList) {
      const prompt = `أعد صياغة الخبر التالي بأسلوب حصري بدون حقوق: ${news.title}`;
      
      const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }]
        })
      });
      
      const aiData = await aiResponse.json();
      const rewrittenText = aiData.choices?.[0]?.message?.content || news.title;
      
      improvedNews.push({
        ...news,
        content: rewrittenText
      });
    }

    // 3️⃣ حفظ الأخبار في MongoDB
    const client = await connectToDatabase();
    const db = client.db(DB_NAME);
    await db.collection("articles").insertMany(improvedNews);

    res.status(200).json({ success: true, data: improvedNews });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب الأخبار" });
  }
}
