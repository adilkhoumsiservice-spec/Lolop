import { useEffect, useState } from "react";
import Link from "next/link";
import Parser from "rss-parser";
import Head from "next/head";

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchRSS = async () => {
      let parser = new Parser();
      const CORS_PROXY = "https://api.allorigins.win/raw?url=";
      const feed = await parser.parseURL(
        CORS_PROXY + "http://feeds.bbci.co.uk/news/rss.xml"
      );
      setArticles(feed.items);

      // إرسال الأخبار إلى MongoDB
      try {
        await fetch("/api/save-news", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(feed.items),
        });
      } catch (err) {
        console.error("Error saving to DB:", err);
      }
    };
    fetchRSS();
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#ffffff" }}>
      <Head>
        <title>Daily Exclusive News</title>
      </Head>

      {/* Header */}
      <header
        style={{
          background: "#0056b3",
          color: "#fff",
          padding: "15px 20px",
        }}
      >
        <h1 style={{ margin: 0 }}>Daily Exclusive News</h1>
        <nav>
          <Link href="/" style={{ color: "#fff" }}>
            Home
          </Link>
        </nav>
      </header>

      {/* News Section */}
      <main style={{ padding: "20px" }}>
        {articles.length === 0 ? (
          <p>Loading latest news...</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {articles.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#e6f0ff",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                {item.enclosure?.url && (
                  <img
                    src={item.enclosure.url}
                    alt={item.title}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                )}
                <h3>{item.title}</h3>
                <p>{item.contentSnippet?.slice(0, 120)}...</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    color: "#0056b3",
                    fontWeight: "bold",
                  }}
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#0056b3",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <p>
          © {new Date().getFullYear()} Daily Exclusive News. All Rights
          Reserved.
        </p>
        <nav>
          <Link href="/privacy" style={{ color: "#fff", marginRight: "15px" }}>
            Privacy Policy
          </Link>
          <Link href="/about" style={{ color: "#fff" }}>
            About Us
          </Link>
        </nav>
      </footer>
    </div>
  );
}
