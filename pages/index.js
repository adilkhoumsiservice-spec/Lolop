// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>Daily Exclusive News</h1>
          <nav style={styles.nav}>
            <Link href="/" style={styles.navLink}>Home</Link>
            <Link href="/privacy" style={styles.navLink}>Privacy Policy</Link>
            <Link href="/about" style={styles.navLink}>About Us</Link>
            <Link href="/contact" style={styles.navLink}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <h2 style={styles.sectionTitle}>Latest News</h2>
        <div style={styles.newsGrid}>
          <Link href="/news/article1" style={styles.newsCard}>
            <h3>Breaking News Headline 1</h3>
            <p>Short description for the first news article...</p>
          </Link>
          <Link href="/news/article2" style={styles.newsCard}>
            <h3>Breaking News Headline 2</h3>
            <p>Short description for the second news article...</p>
          </Link>
          <Link href="/news/article3" style={styles.newsCard}>
            <h3>Breaking News Headline 3</h3>
            <p>Short description for the third news article...</p>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Daily Exclusive News. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f5f7fa",
    color: "#333",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "15px 0",
  },
  headerContent: {
    width: "90%",
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    margin: "0 0 10px",
    fontSize: "28px",
  },
  nav: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  },
  main: {
    flex: 1,
    padding: "30px 5%",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "22px",
    marginBottom: "20px",
    borderBottom: "2px solid #1a1a1a",
    paddingBottom: "5px",
  },
  newsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  newsCard: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textDecoration: "none",
    color: "#333",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  footer: {
    backgroundColor: "#1a1a1a",
    color: "#ccc",
    textAlign: "center",
    padding: "15px",
    fontSize: "14px",
  },
};

// Add hover effect for links (in global.css or via styled-jsx)
