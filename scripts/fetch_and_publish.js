const fs = require("fs");
const path = require("path");
const axios = require("axios");
async function fetchTopHeadlines() {
  const url = "https://newsapi.org/v2/top-headlines";
  const res = await axios.get(url, {
    params: {
      language: "en",
      pageSize: 10,
      apiKey: process.env.NEWS_API_KEY
    },
    timeout: 20000
  });
  return res.data.articles || [];
}
async function rewriteArticle(title, description, url) {
  const prompt = `Rewrite the following news headline and description into a short professional English news summary, avoid opinion, keep factual, max 120 words. Headline: ${title} Description: ${description}`;
  const resp = await axios.post("https://api.openai.com/v1/chat/completions", {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a professional news editor." },
      { role: "user", content: prompt }
    ],
    temperature: 0.2,
    max_tokens: 500
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    timeout: 30000
  });
  const msg = resp.data.choices && resp.data.choices[0] && resp.data.choices[0].message && resp.data.choices[0].message.content ? resp.data.choices[0].message.content.trim() : "";
  return msg;
}
async function main() {
  const all = await fetchTopHeadlines();
  const out = [];
  for (const item of all) {
    if (!item.title) continue;
    const summary = await rewriteArticle(item.title, item.description || "", item.url || "");
    out.push({
      title: item.title,
      summary: summary || item.description || "",
      url: item.url || "",
      publishedAt: item.publishedAt || new Date().toISOString(),
      source: (item.source && item.source.name) || ""
    });
    await new Promise(r => setTimeout(r, 1200));
  }
  const dest = path.join(process.cwd(), "data", "articles.json");
  const payload = { updatedAt: new Date().toISOString(), articles: out.slice(0, 10) };
  fs.writeFileSync(dest, JSON.stringify(payload, null, 2), "utf-8");
}
main().catch(err => { console.error(err); process.exit(1); });
