import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://<adil>:<adilosizar111109>@cluster0.tfuppkw.mongodb.net/?retryWrites=true&w=majority";

if (!mongoose.connection.readyState) {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

const NewsSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date
});
const News = mongoose.models.News || mongoose.model("News", NewsSchema);

export default async function handler(req, res) {
  try {
    const news = await News.find().sort({ date: -1 }).limit(50);
    res.status(200).json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب الأخبار" });
  }
}
