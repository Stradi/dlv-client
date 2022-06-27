import Navbar from '../components/Navbar';
import Downloader from '../components/Downloader';
import { IVideoData } from '../utils/api';
import { useState } from 'react';
import VideoDataDisplay from '../components/VideoDataDisplay';

export default function Home() {
  const [videoData, setVideoData] = useState(null);

  const navItems = [
    {
      title: 'YouTube',
      href: '/youtube',
    },
    {
      title: 'Dailymotion',
      href: '/dailymotion',
    },
    {
      title: 'Vimeo',
      href: '/vimeo',
    },
  ];

  return (
    <div>
      <Navbar items={navItems} />
      <Downloader
        title="Download YouTube Video"
        onVideoDataAcquired={(data) => setVideoData(data)}
        onDownloadButtonClicked={() => setVideoData(null)}
      />
      {videoData && (
        <>
          <br></br>
          <VideoDataDisplay data={videoData} />
        </>
      )}
    </div>
  );
}
