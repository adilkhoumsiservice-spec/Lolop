// pages/_app.js
import '../styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // لا نفعل شيئًا عند الفشل، فقط نتجنب الكراش
      }
    }
  }, []);

  return (
    <>
      <Head>
        {/* إعدادات رأس أساسية قابلة للتجاوز في كل صفحة */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Daily Exclusive News - latest headlines and breaking stories." />
        <meta name="keywords" content="news, headlines, breaking news, daily news" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
