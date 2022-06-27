import Image from "next/image";
import { useState } from "react";
import Downloader from "../components/Downloader";
import Markdown from "../components/MarkdownRenderer";
import Navbar from "../components/Navbar";
import { Dailymotion, Vimeo, YouTube } from "../components/SpecialText";
import VideoDataDisplay from "../components/VideoDataDisplay";

import imgTutorial1 from "../public/assets/Tutorial_1.png";
import imgTutorial2 from "../public/assets/Tutorial_2.png";
import imgTutorial3 from "../public/assets/Tutorial_3.png";

export default function Home() {
  const [videoData, setVideoData] = useState(null);

  const navItems = [
    {
      title: "YouTube",
      href: "/youtube",
    },
    {
      title: "Dailymotion",
      href: "/dailymotion",
    },
    {
      title: "Vimeo",
      href: "/vimeo",
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
        <Image src={imgTutorial1} className="rounded-md" />
        <p>After some moment, you will be greeted with a panel like below.</p>
        <Image src={imgTutorial2} className="rounded-md" />
        <p>
          In this panel, you are able to download the Video+Audio or Only Audio.
        </p>
        <p>
          Click the desired option and let us do the magic and start the
          download.
        </p>
        <Image src={imgTutorial3} className="rounded-md" />
      </Markdown>
    </div>
  );
}
