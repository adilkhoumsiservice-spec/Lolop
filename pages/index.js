import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Daily Exclusive News</h1>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>Home</Link>
          <Link href="/about" style={styles.navLink}>About</Link>
          <Link href="/contact" style={styles.navLink}>Contact</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Latest Headlines</h2>
          <p style={styles.text}>
            Stay updated with the latest and most exclusive news from around the world. 
            Our team works 24/7 to bring you accurate, fast, and trusted information.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
          <ul style={styles.list}>
            <li>✔ Reliable and verified sources</li>
            <li>✔ Real-time updates</li>
            <li>✔ Easy to read and navigate</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© {new Date().getFullYear()} Daily Exclusive News. All rights reserved.</p>
        <div style={styles.footerLinks}>
          <Link href="/privacy" style={styles.footerLink}>Privacy Policy</Link>
          <Link href="/terms" style={styles.footerLink}>Terms of Service</Link>
          <Link href="/contact" style={styles.footerLink}>Contact Us</Link>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  header: {
    backgroundColor: "#004080",
    padding: "20px",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    margin: "0 0 10px 0",
    fontSize: "28px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  main: {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  section: {
    marginBottom: "30px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
  list: {
    paddingLeft: "20px",
    fontSize: "16px",
    lineHeight: "1.6",
  },
  footer: {
    backgroundColor: "#00264d",
    color: "#fff",
    padding: "15px",
    textAlign: "center",
    marginTop: "40px",
  },
  footerText: {
    margin: "0 0 10px 0",
    fontSize: "14px",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },
};
