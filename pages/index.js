// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>أخبار يومية حصرية</h1>
        <nav style={styles.nav}>
          <Link href="/">الرئيسية</Link>
          <Link href="/privacy">سياسة الخصوصية</Link>
          <Link href="/about">من نحن</Link>
          <Link href="/contact">اتصل بنا</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <h2 style={styles.sectionTitle}>آخر الأخبار</h2>
        <ul style={styles.newsList}>
          <li>
            <Link href="/news/article1">عنوان خبر تجريبي 1</Link>
          </li>
          <li>
            <Link href="/news/article2">عنوان خبر تجريبي 2</Link>
          </li>
          <li>
            <Link href="/news/article3">عنوان خبر تجريبي 3</Link>
          </li>
        </ul>
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8fafc",
    color: "#1e293b",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#1e293b",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    margin: "0 0 10px",
    fontSize: "28px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  main: {
    flex: 1,
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "22px",
    marginBottom: "15px",
    borderBottom: "2px solid #1e293b",
    paddingBottom: "5px",
  },
  newsList: {
    listStyle: "none",
    padding: 0,
  },
  footer: {
    backgroundColor: "#1e293b",
    color: "#cbd5e1",
    textAlign: "center",
    padding: "10px",
    fontSize: "14px",
  },
};
