import Navbar from '../components/Navbar';
import Downloader from '../components/Downloader';
import { useState } from 'react';
import VideoDataDisplay from '../components/VideoDataDisplay';
import Markdown from '../components/MarkdownRenderer';
import { Dailymotion, Vimeo, YouTube } from '../components/SpecialText';

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
      <br></br>
      <Markdown>
        <h2>Download YouTube Video</h2>
        <p>
          Have you ever wanted to download a funny
          <YouTube />
          video to send your friend or family.
        </p>
        <p>
          Have you ever wanted to download a sound from <YouTube />.
        </p>
        <p>You've come to the right place.</p>
        <p>
          Download YouTube Video is a free service that allows you to download
          <YouTube />,<Dailymotion />
          or
          <Vimeo />
          videos.
        </p>
        <p>
          We make downloading videos from
          <YouTube />
          easy... It's all two clicks away.
        </p>
        <p>The best part is our service is 100% free.</p>
        <h2>How to use?</h2>
        <p>Using our downloader is fully free and easy.</p>
        <p>
          Just paste the URL of the video in the search box up there and click
          Download now.
        </p>
        <p>After some moment, you will be greeted with a panel like below.</p>
        <p>
          In this panel, you are able to download the Video+Audio or Only Audio.
        </p>
      </Markdown>
    </div>
  );
}
