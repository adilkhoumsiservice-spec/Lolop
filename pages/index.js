import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Head>
        <title>Tech News Hub</title>
        <meta
          name="description"
          content="Latest technology news updated automatically"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8551068222525793"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.logo}>Tech News Hub</h1>
          <nav style={styles.nav}>
            <Link href="/" style={styles.navLink}>
              Home
            </Link>
            <Link href="/contact" style={styles.navLink}>
              Contact Us
            </Link>
            <Link href="/privacy" style={styles.navLink}>
              Privacy Policy
            </Link>
          </nav>
        </header>

        {/* News Section */}
        <main style={styles.main}>
          <h2 style={styles.sectionTitle}>Latest Technology News</h2>
          <div style={styles.grid}>
            {news.map((item, index) => (
              <div key={index} style={styles.card}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardContent}>{item.content}</p>
                <span style={styles.date}>
                  {new Date(item.date).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>© {new Date().getFullYear()} Tech News Hub. All rights reserved.</p>
          <div>
            <Link href="/privacy" style={styles.footerLink}>
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/contact" style={styles.footerLink}>
              Contact Us
            </Link>
          </div>
        </footer>
      </div>
    </>
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
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "1.8rem",
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    padding: "2rem",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "1rem",
    borderBottom: "3px solid #0070f3",
    display: "inline-block",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease",
  },
  cardTitle: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "#0070f3",
  },
  cardContent: {
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  date: {
    fontSize: "0.9rem",
    color: "#777",
    marginTop: "0.5rem",
    display: "block",
  },
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
  },
};
