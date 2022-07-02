import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

import * as gtag from '../utils/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });`,
        }}
      />
      <DefaultSeo
        defaultTitle="Download YouTube Video"
        description="Free downloader for YouTube, Dailymotion and Vimeo. Extract audio from a video or download full video for free, forever."
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
