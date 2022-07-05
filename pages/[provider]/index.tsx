import { GetStaticPaths, GetStaticProps } from 'next';
import BaseDownloaderPage from '../../components/BaseDownloaderPage';

import { providerToBrandName } from '../../utils/provider';

interface ProviderPageProps {
  provider: string;
}

const ProviderPage = ({ provider }: ProviderPageProps) => {
  return <BaseDownloaderPage provider={provider} type="Video" />;
};

export const getStaticPaths: GetStaticPaths = () => {
  const providers = ['YouTube', 'Dailymotion', 'Vimeo'];
  const paths = providers.map((provider) => ({
    params: { provider: provider.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      provider: providerToBrandName(params.provider as string),
    },
  };
};

export default ProviderPage;
