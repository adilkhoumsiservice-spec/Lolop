import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Head>
        <title>Latest News</title>
        <meta name="description" content="Stay updated with the latest news" />
        {/* ✅ AdSense Code */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-xxxxxxxxxxxxxxxx", 
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">📰 News Portal</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">Latest Updates</h2>
            <button
              onClick={fetchNews}
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
            >
              {loading ? "Refreshing..." : "🔄 Refresh"}
            </button>
          </div>

          {/* ✅ AdSense block */}
          <div className="my-4">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script
              dangerouslySetInnerHTML={{
                __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
              }}
            />
          </div>

          {news.length === 0 && !loading && <p>No news available</p>}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.content}</p>
                <small className="text-gray-500">
                  {new Date(item.date).toLocaleString()}
                </small>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 mt-8">
          <div className="container mx-auto text-center space-x-6">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/contact" className="hover:underline">Contact Us</a>
            <a href="/about" className="hover:underline">About</a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} News Portal. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
