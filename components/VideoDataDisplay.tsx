import Image from 'next/image';
import {
  getLargestThumbnailURI,
  IFormat,
  IThumbnail,
  IVideoData,
} from '../utils/api';

import * as gtag from '../utils/gtag';

const resolutionToReadable = (resolution: string): string => {
  if (resolution.indexOf('x') != -1) {
    const height = Number.parseInt(resolution.split('x')[1]);
    return `${Math.ceil(height / 10) * 10}p`;
  } else {
    const bitrate = Number.parseFloat(resolution);
    return `${bitrate.toFixed(1)} kB/s`;
  }
};

interface SingleFormatProps {
  format: IFormat;
  title: string;
}

const SingleFormat = ({ format, title }: SingleFormatProps) => {
  const onDownload = () => {
    gtag.event({
      action: 'download_resource',
      category: 'engagement',
      label: `${title} + ${format.resolution}`,
      value: 2,
    });
  };

  return (
    <a
      href={format.url}
      className="bg-neutral-900 group p-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-600 duration-100 hover:text-neutral-200 border-2 border-neutral-700 hover:border-blue-600"
      target="_blank"
      rel="noreferrer"
      onClick={(e) => onDownload()}
    >
      <p className="opacity-100 group-hover:opacity-0 transition duration-100">
        {resolutionToReadable(format.resolution)}
      </p>
      <div className="opacity-0 group-hover:opacity-100 relative top-0 left-0 w-full h-full duration-100 -translate-y-12 group-hover:-translate-y-6 transition">
        <span className="absolute left-0 top-0 w-full h-full font-medium">
          Download
        </span>
      </div>
    </a>
  );
};

interface FormatDisplayProps {
  formats: IFormat[];
  showAudio: boolean;
  showVideoAudio: boolean;
  title: string;
}

const FormatDisplay = ({
  formats,
  showAudio,
  showVideoAudio,
  title,
}: FormatDisplayProps) => {
  const audioFormats = formats.filter((format) => !format.hasVideo);
  const audioFormatsDOM = audioFormats.map((format) => (
    <SingleFormat format={format} title={title} key={format.id} />
  ));

  const videoFormats = formats.filter((format) => format.hasVideo);
  const videoFormatsDOM = videoFormats.map((format) => (
    <SingleFormat format={format} title={title} key={format.id} />
  ));

  return (
    <div>
      {showVideoAudio && (
        <div className="mb-2">
          <h2 className="font-medium text-neutral-200">Video + Audio</h2>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-3 text-center">
            {videoFormatsDOM}
          </div>
        </div>
      )}
      {showAudio && (
        <div>
          <h2 className="font-medium text-neutral-200">Only Audio</h2>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-3 text-center">
            {audioFormatsDOM}
          </div>
        </div>
      )}
    </div>
  );
};

interface VideoDataDisplayProps {
  data: IVideoData;
  showAudio?: boolean;
  showVideoAudio?: boolean;
}

const VideoDataDisplay = ({
  data,
  showAudio = true,
  showVideoAudio = true,
}: VideoDataDisplayProps) => {
  const thumbnail: IThumbnail = getLargestThumbnailURI(data);
  return (
    <div className="bg-neutral-800 py-2 px-3 rounded-md w-11/12 md:w-1/2 mx-auto text-neutral-300">
      <h2 className="text-neutral-200 font-medium">{data.title}</h2>
      <div className="lg:flex lg:justify-between mt-2">
        <div className="w-full border-2 border-neutral-700 hover:border-blue-600 rounded-md">
          <Image
            src={thumbnail.url}
            layout="responsive"
            width={thumbnail.width}
            height={thumbnail.height}
            className="rounded-md max-w-32"
          />
        </div>
        <div className="w-full lg:pl-4 mt-2 lg:mt-0">
          <FormatDisplay
            formats={data.formats}
            showAudio={showAudio}
            showVideoAudio={showVideoAudio}
            title={data.title}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoDataDisplay;
