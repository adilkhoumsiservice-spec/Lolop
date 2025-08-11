import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const sampleArticles = [
    {
      id: "1",
      title: "Major Developments in Global Markets",
      excerpt: "Markets react to latest policy changes and investor sentiment.",
      source: "World News",
      publishedAt: "2025-08-11T09:00:00Z"
    },
    {
      id: "2",
      title: "Technology Company Announces New Product",
      excerpt: "A major tech company revealed its new product line today.",
      source: "Tech Daily",
      publishedAt: "2025-08-11T07:30:00Z"
    },
    {
      id: "3",
      title: "Sports: Championship Results and Highlights",
      excerpt: "Top moments and outcomes from last night's matches.",
      source: "Sports Hub",
      publishedAt: "2025-08-10T22:15:00Z"
    }
  ];

  return (
    <>
      <Head>
        <title>أخبار يومية حصرية</title>
        <meta name="description" content="أخبار يومية حصرية — تغطية سريعة وعناوين مهمة" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={container}>
        <header style={header}>
          <div style={brand}>أخبار يومية حصرية</div>
          <nav>
            <ul style={navList}>
              <li><Link href="/">الرئيسية</Link></li>
              <li><Link href="/world">أخبار العالم</Link></li>
              <li><Link href="/sports">الرياضة</Link></li>
              <li><Link href="/tech">التكنولوجيا</Link></li>
              <li><Link href="/privacy-policy">سياسة الخصوصية</Link></li>
              <li><Link href="/contact">اتصل بنا</Link></li>
            </ul>
          </nav>
        </header>

        <main style={main}>
          <section style={hero}>
            <h1 style={heroTitle}>أخبار يومية حصرية</h1>
            <p style={heroSubtitle}>Latest headlines and exclusive coverage</p>
          </section>

          <section style={listSection}>
            {sampleArticles.length === 0 ? (
              <div style={empty}>No articles yet. Try again later.</div>
            ) : (
              sampleArticles.map((a) => (
                <article key={a.id} style={card}>
                  <h2 style={cardTitle}>
                    <Link href={`/news/${a.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {a.title}
                    </Link>
                  </h2>
                  <p style={cardExcerpt}>{a.excerpt}</p>
                  <div style={metaLine}>
                    <span>{a.source}</span>
                    <span style={dot}>·</span>
                    <time>{new Date(a.publishedAt).toLocaleString()}</time>
                  </div>
                </article>
              ))
            )}
          </section>
        </main>

        <footer style={footer}>
          <div>© {new Date().getFullYear()} أخبار يومية حصرية</div>
          <div style={footerLinks}>
            <Link href="/privacy-policy">Privacy</Link>
            <span style={{ margin: "0 8px" }}>·</span>
            <Link href="/contact">Contact</Link>
          </div>
        </footer>
      </div>
    </>
  );
}

const container = {
  fontFamily: "Inter, Arial, Helvetica, sans-serif",
  color: "#0f172a",
  background: "#f7fafc",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column"
};

const header = {
  background: "#071029",
  color: "#fff",
  padding: "18px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const brand = {
  fontSize: "18px",
  fontWeight: 700
};

const navList = {
  listStyle: "none",
  display: "flex",
  gap: "16px",
  margin: 0,
  padding: 0,
  alignItems: "center",
  color: "#fff"
};

const main = {
  maxWidth: 900,
  margin: "28px auto",
  padding: "0 16px",
  width: "100%",
  flex: 1
};

const hero = {
  textAlign: "center",
  padding: "32px 8px",
  marginBottom: 20
};

const heroTitle = {
  margin: 0,
  fontSize: "30px",
  color: "#0b3d91"
};

const heroSubtitle = {
  marginTop: 8,
  color: "#64748b"
};

const listSection = {
  marginTop: 8
};

const card = {
  background: "#fff",
  borderRadius: 10,
  padding: 18,
  marginBottom: 14,
  boxShadow: "0 6px 18px rgba(15,23,42,0.06)"
};

const cardTitle = {
  margin: "0 0 10px",
  fontSize: 18,
  color: "#0b3d91"
};

const cardExcerpt = {
  margin: 0,
  color: "#334155"
};

const metaLine = {
  marginTop: 10,
  fontSize: 13,
  color: "#94a3b8",
  display: "flex",
  gap: 8,
  alignItems: "center"
};

const dot = {
  opacity: 0.6
};

const empty = {
  padding: 40,
  textAlign: "center",
  color: "#64748b"
};

const footer = {
  background: "#071029",
  color: "#fff",
  textAlign: "center",
  padding: 16
};

const footerLinks = {
  marginTop: 8,
  display: "flex",
  justifyContent: "center",
  gap: 8,
  color: "#cbd5e1"
};
```0
