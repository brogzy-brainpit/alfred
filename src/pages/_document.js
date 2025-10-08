import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        {/* Univers LT Std font */}
        <link
          href="https://fonts.cdnfonts.com/css/univers-lt-std"
          rel="stylesheet"
        />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
