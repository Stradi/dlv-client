import { GetStaticPaths, GetStaticProps } from "next";

import BaseDownloaderPage from "../../../components/BaseDownloaderPage";
import { providerToBrandName } from "../../../utils/provider";

interface DownloaderPageProps {
  provider: string;
  type: string;
}

const DownloaderPage = ({ provider, type }: DownloaderPageProps) => {
  return <BaseDownloaderPage provider={provider} type={type} />;
};

export const getStaticPaths: GetStaticPaths = () => {
  const providers = ["YouTube", "Dailymotion", "Vimeo", "Twitter"];
  const types = ["mp3", "mp4"];

  const paths = providers.map((provider) =>
    types.map((type) => {
      return {
        params: {
          provider: provider.toLowerCase(),
          type,
        },
      };
    })
  );

  return {
    paths: paths.flat(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      provider: providerToBrandName(params.provider as string),
      type: params.type as string,
    },
  };
};

export default DownloaderPage;
