import cx from 'classnames';
import { ChangeEvent, useRef, useState } from 'react';
import {
  getVideoData,
  IError,
  isValidResponse,
  IVideoData,
} from '../utils/api';
import { validateURL } from '../utils/url';

interface DownloaderProps {
  title: string;
  onVideoDataAcquired: (data: IVideoData) => void;
  onDownloadButtonClicked?: () => void;
}

const Downloader = ({
  title,
  onVideoDataAcquired,
  onDownloadButtonClicked,
}: DownloaderProps) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>();

  const inputClasses = cx(
    `rounded-md w-full py-2 px-4 bg-neutral-800 border-2 border-neutral-700
     hover:border-blue-600 focus:bg-neutral-700 placeholder-neutral-500
     transition duration-100 focus:outline-none text-neutral-200 focus:placeholder-neutral-400
     disabled:bg-neutral-700 disabled:text-neutral-300 disabled:hover:border-neutral-700`,
    {
      'ring-2 ring-red-600 focus:ring-2 focus:ring-red-600': error,
    },
    {
      'ring-0 focus:ring-blue-600 focus:ring-2': !error,
    }
  );

  const onURLChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setUrl(e.currentTarget.value);
  };

  const onDownloadClicked = async () => {
    onDownloadButtonClicked();
    const urlValidationError = validateURL(url);
    if (urlValidationError) {
      setError(urlValidationError);
      inputRef.current.focus();
      return;
    }

    setError(null);
    setIsLoading(true);
    let response = await getVideoData(url);
    if (!isValidResponse(response)) {
      response = response as IError;
      setError(response.error);
      inputRef.current.focus();
    } else {
      response = response as IVideoData;
      onVideoDataAcquired(response);
    }
    setIsLoading(false);
  };

  return (
    <div className="mt-4 mx-auto">
      <h1 className="text-neutral-200 text-2xl text-center mb-2">{title}</h1>
      <div className="w-11/12 md:w-1/3 mx-auto">
        <input
          type="url"
          placeholder="Paste your video link here"
          onChange={onURLChange}
          className={inputClasses}
          ref={inputRef}
          disabled={isLoading}
        />
      </div>
      <br></br>
      <div className="mt-2 w-11/12 sm:w-1/3 md:w-1/6 mx-auto">
        <input
          type="button"
          onClick={onDownloadClicked}
          value={isLoading ? 'Loading' : 'Download Now'}
          disabled={isLoading}
          className="w-full bg-neutral-800 border-2 border-neutral-700 hover:border-blue-600 p-2 rounded-md text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 transition duration-100 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:bg-neutral-700 disabled:hover:border-neutral-700"
        />
      </div>
      {error && (
        <p className="mt-2 py-2 px-4 bg-neutral-800 rounded-md text-white">
          <span className="text-red-500 font-medium">ERROR: </span>
          {error}
        </p>
      )}
    </div>
  );
};

export default Downloader;
