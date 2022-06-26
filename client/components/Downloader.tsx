import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from 'react';
import cx from 'classnames';
import { isValid } from '../utils/url';

interface DownloaderProps {
  title: string;
}

const Downloader = ({ title }: DownloaderProps) => {
  const [url, setUrl] = useState('');
  const [inputError, setInputError] = useState(false);

  const inputRef = useRef<HTMLInputElement>();

  const inputClasses = cx(
    'rounded-md w-full py-2 px-4 bg-neutral-800 focus:bg-neutral-700 placeholder-neutral-500 transition duration-100 focus:outline-none text-neutral-200 focus:placeholder-neutral-400',
    {
      'ring-2 ring-red-600 focus:ring-2 focus:ring-red-600': inputError,
    },
    {
      'ring-0 focus:ring-blue-600 focus:ring-2': !inputError,
    }
  );

  const onURLChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputError(false);
  };

  const onDownloadClicked = () => {
    if (!isValid(url)) {
      setInputError(true);
      inputRef.current.focus();
      return;
    }
  };

  return (
    <div className="mt-4 w-1/2 mx-auto">
      <h1 className="text-neutral-200 text-2xl text-center mb-2">{title}</h1>
      <input
        type="url"
        placeholder="Paste your video link here"
        onChange={onURLChange}
        className={inputClasses}
        ref={inputRef}
      />
      <br></br>
      <div className="mt-2 w-1/3 mx-auto">
        <input
          type="button"
          onClick={onDownloadClicked}
          value="Download Now"
          className="w-full bg-neutral-800 p-2 rounded-md text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 transition duration-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    </div>
  );
};

export default Downloader;
