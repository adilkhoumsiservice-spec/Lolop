import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* تحسينات SEO أساسية */}
        <title>أخبار الذكاء الاصطناعي - سريع ودقيق</title>
        <meta name="description" content="تابع آخر أخبار الذكاء الاصطناعي بسرعة ودقة مع تحديثات فورية ومقالات حصرية." />
        <meta name="keywords" content="الذكاء الاصطناعي, أخبار, تقنية, AI news, artificial intelligence" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph للسوشيال ميديا */}
        <meta property="og:title" content="أخبار الذكاء الاصطناعي" />
        <meta property="og:description" content="آخر الأخبار والمقالات حول الذكاء الاصطناعي." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usacargo.business" />
        <meta property="og:image" content="https://usacargo.business/og-image.jpg" />

        {/* كود Google AdSense */}
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
