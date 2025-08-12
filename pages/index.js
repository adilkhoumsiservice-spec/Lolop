import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={styles.container}>
      {/* AdSense أعلى */}
      <div style={styles.ads}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8551068222525793"
          crossOrigin="anonymous"
        ></script>
      </div>

      <h1 style={styles.title}>Tech News</h1>

      <div style={styles.newsList}>
        {news.length > 0 ? (
          news.map((item, index) => (
            <div key={index} style={styles.card}>
              <h2 style={styles.cardTitle}>{item.title}</h2>
              <p style={styles.cardContent}>{item.content}</p>
              <span style={styles.date}>
                {new Date(item.date).toLocaleDateString()}
              </span>
            </div>
          ))
        ) : (
          <p style={styles.loading}>Loading news...</p>
        )}
      </div>

      {/* AdSense أسفل */}
      <div style={styles.ads}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8551068222525793"
          crossOrigin="anonymous"
        ></script>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <a href="/contact" style={styles.footerLink}>Contact Us</a> |{" "}
        <a href="/privacy" style={styles.footerLink}>Privacy Policy</a>
        <p style={styles.copy}>© {new Date().getFullYear()} Tech News</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#007BFF",
  },
  newsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    flex: 1,
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  cardTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#222",
  },
  cardContent: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "10px",
  },
  date: {
    fontSize: "0.9rem",
    color: "#888",
  },
  loading: {
    textAlign: "center",
    color: "#777",
  },
  ads: {
    margin: "20px 0",
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    padding: "15px",
    borderTop: "1px solid #ddd",
    marginTop: "20px",
    background: "#fff",
  },
  footerLink: {
    color: "#007BFF",
    textDecoration: "none",
    margin: "0 5px",
  },
  copy: {
    marginTop: "10px",
    fontSize: "0.9rem",
    color: "#666",
  },
};
