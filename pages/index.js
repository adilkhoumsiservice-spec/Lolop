// pages/index.js
import { useEffect, useState } from "react";
import Script from "next/script";

export default function HomePage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Example data - Replace with your API call
    setNews([
      {
        title: "Tech Innovation Changes the World",
        content: "Latest technological advancements are shaping our future in remarkable ways.",
        date: "2025-08-13"
      },
      {
        title: "AI Breakthrough in Healthcare",
        content: "Artificial intelligence is now diagnosing diseases faster and more accurately.",
        date: "2025-08-12"
      },
      {
        title: "SpaceX Successfully Lands Starship",
        content: "A new milestone in space exploration has been achieved.",
        date: "2025-08-11"
      }
    ]);
  }, []);

  return (
    <div style={styles.container}>
      {/* Google AdSense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8551068222525793"
        crossOrigin="anonymous"
      />

      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.siteTitle}>Global Tech Today</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="#news" style={styles.navLink}>News</a>
          <a href="/contact" style={styles.navLink}>Contact Us</a>
          <a href="/privacy" style={styles.navLink}>Privacy Policy</a>
        </nav>
      </header>

      {/* News Section */}
      <main style={styles.main}>
        <h2 style={styles.sectionTitle} id="news">Latest News</h2>
        <div style={styles.newsList}>
          {news.map((item, index) => (
            <div key={index} style={styles.newsCard}>
              <h3 style={styles.newsTitle}>{item.title}</h3>
              <p style={styles.newsContent}>{item.content}</p>
              <span style={styles.newsDate}>
                {new Date(item.date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div>
          <a href="/contact" style={styles.footerLink}>Contact Us</a> |{" "}
          <a href="/privacy" style={styles.footerLink}>Privacy Policy</a>
        </div>
        <p style={styles.footerText}>© {new Date().getFullYear()} Global Tech Today. All rights reserved.</p>
      </footer>
    </div>
  );
}

// CSS in JS Styles
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f8f9fa",
    color: "#212529",
    margin: 0,
    padding: 0
  },
  header: {
    backgroundColor: "#0d6efd",
    padding: "20px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  siteTitle: {
    margin: "0 0 10px",
    fontSize: "2rem"
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem"
  },
  main: {
    maxWidth: "1000px",
    margin: "20px auto",
    padding: "0 20px"
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#0d6efd"
  },
  newsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px"
  },
  newsCard: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease-in-out"
  },
  newsCardHover: {
    transform: "scale(1.02)"
  },
  newsTitle: {
    fontSize: "1.3rem",
    marginBottom: "10px",
    color: "#0d6efd"
  },
  newsContent: {
    fontSize: "1rem",
    lineHeight: "1.5",
    marginBottom: "10px"
  },
  newsDate: {
    fontSize: "0.85rem",
    color: "#6c757d"
  },
  footer: {
    backgroundColor: "#212529",
    color: "white",
    textAlign: "center",
    padding: "15px",
    marginTop: "40px"
  },
  footerLink: {
    color: "#0d6efd",
    textDecoration: "none"
  },
  footerText: {
    fontSize: "0.85rem",
    marginTop: "10px"
  }
};
