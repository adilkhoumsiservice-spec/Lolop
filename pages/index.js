// pages/index.js
import Head from 'next/head'

export default function Home() {
  const articles = [
    {
      url: "https://example.com/article1",
      title: "أول مقال تجريبي",
      summary: "هذا ملخص قصير للمقال الأول لتوضيح شكل المحتوى.",
      source: "Example News"
    },
    {
      url: "https://example.com/article2",
      title: "ثاني مقال تجريبي",
      summary: "هذا ملخص قصير للمقال الثاني مع تفاصيل إضافية.",
      source: "Example Blog"
    }
  ];

  return (
    <div style={{fontFamily:"Arial, sans-serif", maxWidth:800, margin:"0 auto", padding:20}}>
      <Head>
        <title>موقعي</title>
        <meta name="description" content="موقع تجريبي مع مقالات وروابط" />
      </Head>

      <header style={{textAlign:"center", marginBottom:30}}>
        <h1 style={{color:"#0b3d91"}}>مرحباً بك في موقعي</h1>
        <p style={{color:"#555"}}>هنا ستجد أحدث المقالات والمحتوى المميز.</p>
      </header>

      <main>
        {articles.map((a, index) => (
          <article 
            key={index} 
            style={{
              marginBottom:20, 
              padding:15, 
              border:"1px solid #ddd", 
              borderRadius:5,
              backgroundColor:"#fff"
            }}
          >
            <h2>
              <a href={a.url} target="_blank" rel="noreferrer" style={{color:"#0b3d91", textDecoration:"none"}}>
                {a.title}
              </a>
            </h2>
            <p>{a.summary}</p>
            <div style={{marginTop:10, fontSize:13, color:"#94a3b8"}}>
              {a.source}
            </div>
          </article>
        ))}
      </main>

      <footer style={{marginTop:50, textAlign:"center", fontSize:14, color:"#aaa"}}>
        <a href="/privacy-policy" style={{margin:"0 10px"}}>Privacy Policy</a> | 
        <a href="/terms" style={{margin:"0 10px"}}>Terms & Conditions</a>
        <br />
        © {new Date().getFullYear()} موقعك - جميع الحقوق محفوظة
      </footer>
    </div>
  );
}        )}
      </header>

      <main className="container">
        {articles.length === 0 ? (
          <div className="empty">No articles yet. Try again later.</div>
        ) : (
          articles.map((a, i) => (
            <article className="card" key={i}>
              <h2>
                <a href={a.url} target="_blank" rel="noreferrer">
                  {a.title}
                </a>
              </h2>
              <p>{a.summary}</p>
              <div className="meta">
                {a.source} · {a.publishedAt ? new Date(a.publishedAt).toLocaleString() : ""}
              </div>
            </article>
          ))
        )}
      </main>

      <footer className="site-footer">
        <div>Powered by NewsAPI & OpenAI</div>
      </footer>

      <style jsx global>{`
        body{font-family:Inter,Arial,Helvetica,sans-serif;margin:0;background:#f7fafc;color:#111}
        .site-header{background:#0f172a;color:#fff;padding:28px 20px;text-align:center}
        .container{max-width:900px;margin:28px auto;padding:0 16px}
        .card{background:#fff;border-radius:10px;padding:18px;margin-bottom:16px;box-shadow:0 6px 18px rgba(15,23,42,0.06)}
        .card h2{margin:0 0 10px;font-size:20px;color:#0b3d91}
        .card p{margin:0;color:#334155}
        .meta{margin-top:10px;font-size:13px;color:#94a3b8}
        .site-footer{padding:20px;text-align:center;color:#64748b}
        .empty{padding:40px;text-align:center;color:#64748b}
        .subtitle{margin:6px;opacity:.9}
        .updated{font-size:13px;opacity:.8}
      `}</style>
    </>
  );
}
      <header>
        <h1>Daily AI News</h1>
        <p style={{ margin: 6, opacity: 0.9 }}>
          Fresh English news rewritten by AI
        </p>
        {updatedAt && (
          <div style={{ fontSize: 13, opacity: 0.8 }}>
            Last update: {new Date(updatedAt).toLocaleString()}
          </div>
        )}
      </header>

      <main>
        {articles.length === 0 ? (
          <div
            style={{
              padding: 40,
              textAlign: "center",
              color: "#64748b",
            }}
          >
            No articles yet. Try again later.
          </div>
        ) : (
          articles.map((a, i) => (
            <article className="card" key={i}>
              <h2>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#0b3d91", textDecoration: "none" }}
                >
                  {a.title}
                </a>
              </h2>
              <p>{a.summary}</p>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  color: "#94a3b8",
                }}
              >
                {a.source} · {new Date(a.publishedAt).toLocaleString()}
              </div>
            </article>
          ))
        )}
      </main>

      <footer>
        <div>Powered by NewsAPI & OpenAI</div>
      </footer>
    </>
  );
}                <h2><a href={a.url} target="_blank" rel="noreferrer" style={{color:"#0b3d91",textDecoration:"none"}}>{a.title}</a></h2>
                <p>{a.summary}</p>
                <div style={{marginTop:10,fontSize:13,color:"#94a3b8"}}>{a.source} · {new Date(a.publishedAt).toLocaleString()}</div>
              </article>
            ))
          )}
        </main>
        <footer>
          <div>Powered by NewsAPI & OpenAI</div>
        </footer>
      </body>
    </html>
  );
}
