import {
  getLargestThumbnailURI,
  IFormat,
  IThumbnail,
  IVideoData,
} from '../utils/api';
import Image from 'next/image';
import Link from 'next/link';

interface FormatDisplayProps {
  formats: IFormat[];
}
const FormatDisplay = ({ formats }: FormatDisplayProps) => {
  const formatsDOM = formats.map((format) => (
    <a
      href={format.url}
      className="bg-neutral-900 group p-2 rounded-md transition duration-100 hover:text-neutral-200"
    >
      <p className="opacity-100 group-hover:opacity-0 transition duration-100">
        {format.resolution}
      </p>
      <div className="opacity-0 group-hover:opacity-100 relative top-0 left-0 w-full h-full duration-100 -translate-y-12 group-hover:-translate-y-6 transition">
        <span className="absolute left-0 top-0 w-full h-full font-medium">
          Download
        </span>
      </div>
    </a>
  ));
  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-3 text-center">
      {formatsDOM}
    </div>
  );
};

interface VideoDataDisplayProps {
  data: IVideoData;
}

const VideoDataDisplay = ({ data }: VideoDataDisplayProps) => {
  const thumbnail: IThumbnail = getLargestThumbnailURI(data);
  return (
    <div className="bg-neutral-800 py-2 px-3 rounded-md w-1/2 mx-auto text-neutral-300">
      <h2 className="text-neutral-200 font-medium">{data.title}</h2>
      <div className="lg:flex lg:justify-between mt-2">
        <div className="w-full">
          <Image
            src={thumbnail.url}
            layout="responsive"
            width={thumbnail.width}
            height={thumbnail.height}
            className="rounded-md max-w-32"
          />
        </div>
        <div className="w-full lg:pl-4 mt-2 lg:mt-0">
          <FormatDisplay formats={data.formats} />
        </div>
      </div>
    </div>
  );
};

export default VideoDataDisplay;
