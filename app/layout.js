import "./globals.css";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "MoneyLab Ventures",
  description: "Money Lab: Amazon Automation Service",
  icons: {
    icon: "/moneylab.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google tag (gtag.js)  */}
      <>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_G_ANALYTICS_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.NEXT_PUBLIC_G_ANALYTICS_ID}');
          `}
        </Script>
      </>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <body>{children}</body>
    </html>
  );
}
