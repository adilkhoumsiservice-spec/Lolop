import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.error("فشل في جلب الأخبار:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📰 آخر الأخبار</h1>
      <button
        onClick={fetchNews}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          background: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {loading ? "جارٍ التحديث..." : "🔄 تحديث الأخبار"}
      </button>

      {news.length === 0 && !loading && <p>لا توجد أخبار حالياً</p>}
      {news.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px"
          }}
        >
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <small>{new Date(item.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
