// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0056b3" />
        <meta property="og:site_name" content="Daily Exclusive News" />
        <meta property="og:type" content="website" />

        {/* AdSense verification + Auto Ads script */}
        <meta name="google-adsense-account" content="ca-pub-8551068222525793" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8551068222525793"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
