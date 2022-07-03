import Link from 'next/link';
import { providerToSpecialTextComponent } from '../utils/provider';

const DownloadersTable = () => {
  return (
    <table className="text-center table-fixed border-separate border-spacing-1">
      <thead className="">
        <tr>
          <th className="text-neutral-300">
            {providerToSpecialTextComponent('youtube')}
          </th>
          <th className="text-neutral-300">
            {providerToSpecialTextComponent('dailymotion')}
          </th>
          <th className="text-neutral-300">
            {providerToSpecialTextComponent('vimeo')}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="group border-2 border-neutral-700 hover:border-blue-600 bg-neutral-800 rounded-md hover:bg-neutral-700 transition duration-100 m-4">
            <Link href="/youtube">
              <a className="py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm w-full h-full block no-underline text-neutral-300 group-hover:text-white transition duration-100">
                Video
              </a>
            </Link>
          </th>
          <th className="group border-2 border-neutral-700 hover:border-blue-600 bg-neutral-800 rounded-md hover:bg-neutral-700 transition duration-100 m-4">
            <Link href="/dailymotion">
              <a className="py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm w-full h-full block no-underline text-neutral-300 group-hover:text-white transition duration-100">
                Video
              </a>
            </Link>
          </th>
          <th className="group border-2 border-neutral-700 hover:border-blue-600 bg-neutral-800 rounded-md hover:bg-neutral-700 transition duration-100 m-4">
            <Link href="/vimeo">
              <a className="py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm w-full h-full block no-underline text-neutral-300 group-hover:text-white transition duration-100">
                Video
              </a>
            </Link>
          </th>
        </tr>
        <tr>
          <th className="group border-2 border-neutral-700 hover:border-blue-600 bg-neutral-800 rounded-md hover:bg-neutral-700 transition duration-100 m-4">
            <Link href="/youtube/to/mp3">
              <a className="py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm w-full h-full block no-underline text-neutral-300 group-hover:text-white transition duration-100">
                MP3
              </a>
            </Link>
          </th>
          <th className="group border-2 border-neutral-700 hover:border-blue-600 bg-neutral-800 rounded-md hover:bg-neutral-700 transition duration-100 m-4">
            <Link href="/dailymotion/to/mp3">
              <a className="py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm w-full h-full block no-underline text-neutral-300 group-hover:text-white transition duration-100">
                MP3
              </a>
            </Link>
          </th>
          <th className="group border-2 border-neutral-700 hover:border-blue-600 bg-neutral-800 rounded-md hover:bg-neutral-700 transition duration-100 m-4">
            <Link href="/vimeo/to/mp3">
              <a className="py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm w-full h-full block no-underline text-neutral-300 group-hover:text-white transition duration-100">
                MP3
              </a>
            </Link>
          </th>
        </tr>
        <tr>
          <th className="group border-2 border-neutral-700 hover:border-blue-600 bg-neutral-800 rounded-md hover:bg-neutral-700 transition duration-100 m-4">
            <Link href="/youtube/to/mp4">
              <a className="py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm w-full h-full block no-underline text-neutral-300 group-hover:text-white transition duration-100">
                MP4
              </a>
            </Link>
          </th>
          <th className="group border-2 border-neutral-700 hover:border-blue-600 bg-neutral-800 rounded-md hover:bg-neutral-700 transition duration-100 m-4">
            <Link href="/dailymotion/to/mp4">
              <a className="py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm w-full h-full block no-underline text-neutral-300 group-hover:text-white transition duration-100">
                MP4
              </a>
            </Link>
          </th>
          <th className="group border-2 border-neutral-700 hover:border-blue-600 bg-neutral-800 rounded-md hover:bg-neutral-700 transition duration-100 m-4">
            <Link href="/vimeo/to/mp4">
              <a className="py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-sm w-full h-full block no-underline text-neutral-300 group-hover:text-white transition duration-100">
                MP4
              </a>
            </Link>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default DownloadersTable;
