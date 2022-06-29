import { DefaultSeo } from "next-seo";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
        defaultTitle="Download YouTube Video"
        description="Free downloader for YouTube, Dailymotion and Vimeo. Extract audio from a video or download full video for free, forever."
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
