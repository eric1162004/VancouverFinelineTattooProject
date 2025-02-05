import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";

// Set up for Google Analytics
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from "../components/Layout";
import "../styles/globals.css";
import "animate.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-XXXXXXXXXX', { page_path: url });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ParallaxProvider>
      <Layout>
        <Head>
          <link rel="icon" type="image/x-icon" href="/img/miki_logo_white.png"></link>
          <title>VANCOUVER FINELINE TATTOO｜Miki S</title>
        </Head>

        {/* Google Analytics (GA) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-S4WCKRWR4Q`}
        />
        <Script
          id="ga-script"
          // ensures that the script loads after the page becomes interactive
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S4WCKRWR4Q');
            `,
          }}
        />

        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}
