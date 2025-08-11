import '@/styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <>
      {/* إعلان أعلى المحتوى */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center', margin: '10px auto' }}
        data-ad-client="ca-pub-8551068222525793"
        data-ad-slot="1234567890"  // غيّرها برقم الوحدة الإعلانية من AdSense
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      <Component {...pageProps} />
    </>
  );
}
