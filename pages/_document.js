// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tag الخاص بـ AdSense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-8551068222525793"
        />

        {/* كود Auto Ads من AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8551068222525793"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body style={{ backgroundColor: "#ffffff", color: "#000" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
