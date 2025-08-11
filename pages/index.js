// pages/index.js
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`
        );
        const data = await res.json();
        setArticles(data.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Daily Exclusive News</h1>
        <nav style={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      {/* News Section */}
      <main style={styles.main}>
        {loading ? (
          <p>Loading latest news...</p>
        ) : (
          articles.map((article, index) => (
            <div key={index} style={styles.card}>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  style={styles.image}
                />
              )}
              <h2 style={styles.cardTitle}>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))
        )}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/about">About Us</Link>
        <p style={{ marginTop: "10px" }}>
          © {new Date().getFullYear()} Daily Exclusive News
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#1a202c",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    margin: "0",
    fontSize: "2rem",
  },
  nav: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  main: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  cardTitle: {
    fontSize: "1.2rem",
    margin: "10px 0",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  footer: {
    backgroundColor: "#1a202c",
    color: "#fff",
    textAlign: "center",
    padding: "15px",
  },
};
