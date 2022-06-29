import { SiYoutube, SiDailymotion, SiVimeo } from 'react-icons/si';

const YouTube = () => {
  return (
    <i className="font-medium text-white">
      {' '}
      <SiYoutube
        title="YouTube"
        className="inline align-middle -mt-0.5"
        size={'1.25rem'}
        color="red"
      />{' '}
      YouTube{' '}
    </i>
  );
};

const Dailymotion = () => {
  return (
    <i className="font-medium text-white">
      {' '}
      <SiDailymotion
        title="Dailymotion"
        className="inline align-middle -mt-0.5 bg-black"
        size={'1.25rem'}
        color="white"
      />{' '}
      Dailymotion{' '}
    </i>
  );
};

const Vimeo = () => {
  return (
    <i className="font-medium text-white">
      {' '}
      <SiVimeo
        title="Vimeo"
        className="inline align-middle -mt-0.5"
        size={'1.25rem'}
        color="#86c9ef"
      />{' '}
      Vimeo{' '}
    </i>
  );
};

export { YouTube, Dailymotion, Vimeo };
