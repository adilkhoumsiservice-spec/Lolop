import fs from "fs";
import path from "path";
export async function getStaticProps() {
  const p = path.join(process.cwd(), "data", "articles.json");
  const raw = fs.readFileSync(p, "utf-8");
  const data = JSON.parse(raw);
  return {
    props: {
      data
    },
    revalidate: 3600
  };
}
export default function Home({ data }) {
  const articles = data.articles || [];
  const updatedAt = data.updatedAt || null;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Daily AI News</title>
        <style>{`body{font-family:Inter,Arial,Helvetica,sans-serif;margin:0;background:#f7fafc;color:#111}header{background:#0f172a;color:#fff;padding:28px 20px;text-align:center}main{max-width:900px;margin:28px auto;padding:0 16px}article.card{background:#fff;border-radius:10px;padding:18px;margin-bottom:16px;box-shadow:0 6px 18px rgba(15,23,42,0.06)}article.card h2{margin:0 0 10px;font-size:20px;color:#0b3d91}article.card p{margin:0;color:#334155}footer{padding:20px;text-align:center;color:#64748b}`}</style>
      </head>
      <body>
        <header>
          <h1>Daily AI News</h1>
          <p style={{margin:6,opacity:0.9}}>Fresh English news rewritten by AI</p>
          {updatedAt ? <div style={{fontSize:13,opacity:0.8}}>Last update: {new Date(updatedAt).toLocaleString()}</div> : null}
        </header>
        <main>
          {articles.length === 0 ? (
            <div style={{padding:40,textAlign:"center",color:"#64748b"}}>No articles yet. Try again later.</div>
          ) : (
            articles.map((a, i) => (
              <article className="card" key={i}>
                <h2><a href={a.url} target="_blank" rel="noreferrer" style={{color:"#0b3d91",textDecoration:"none"}}>{a.title}</a></h2>
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
