import { NextSeo } from "next-seo";
import Image from "next/image";
import { useState } from "react";
import { providerToSpecialTextComponent } from "./../utils/provider";
import Downloader from "./Downloader";
import MarkdownRenderer from "./MarkdownRenderer";
import { Dailymotion, Vimeo, YouTube } from "./SpecialText";
import VideoDataDisplay from "./VideoDataDisplay";

import Link from "next/link";
import imgTutorial1 from "./../public/assets/Tutorial_1.png";
import imgTutorial2 from "./../public/assets/Tutorial_2.png";
import imgTutorial3 from "./../public/assets/Tutorial_3.png";
import imgTutorial4 from "./../public/assets/Tutorial_4.png";
import imgTutorial5 from "./../public/assets/Tutorial_5.png";
import DownloadersTable from "./DownloadersTable";

interface BaseDownloaderPageProps {
  provider: string;
  type: string;
}

const BaseDownloaderPage = ({ provider, type }: BaseDownloaderPageProps) => {
  const [videoData, setVideoData] = useState(null);

  return (
    <>
      <NextSeo
        title={`Download ${provider} ${type}`}
        description={`Free downloader for ${provider} and more. Convert ${provider} videos to ${type} for free.`}
      />
      <div>
        <Downloader
          title={`${provider} to ${type} Downloader`}
          onVideoDataAcquired={(data) => setVideoData(data)}
          onDownloadButtonClicked={() => setVideoData(null)}
        />
        {videoData && (
          <>
            <br></br>
            <VideoDataDisplay data={videoData} />
          </>
        )}
        <MarkdownRenderer>
          <h3 className="text-center">or try our other downloaders</h3>
          <DownloadersTable />
        </MarkdownRenderer>
        <MarkdownRenderer>
          <h2>
            Download {provider} {type}
          </h2>
          <p>
            Have you ever wanted to download a funny
            {providerToSpecialTextComponent(provider)}
            {type} to send your friend or family.
          </p>
          <p>
            Have you ever wanted to download a {type} from{" "}
            {providerToSpecialTextComponent(provider)}.
          </p>
          <p>You've come to the right place.</p>
          <p>
            Download YouTube Video is a free service that allows you to download
            <YouTube />,<Dailymotion />
            or
            <Vimeo />
            videos and audios.
          </p>
          <p>
            We make downloading {type} from
            {providerToSpecialTextComponent(provider)}
            easy... It's all two clicks away.
          </p>
          <p>The best part is our service is 100% free.</p>
          <h2>How to use?</h2>
          <p>
            If you want more in-depth tutorial about downloading YouTube videos,
            see{" "}
            <Link href="/blog/how-to-download-youtube-video">
              <a>this tutorial.</a>
            </Link>
          </p>
          <p>
            Using our {provider} {type.toLowerCase()} downloader is fully free
            and easy.
          </p>
          <p>
            Just paste the URL of the video in the search box up there and click
            Download now.
          </p>
          <Image src={imgTutorial1} className="rounded-md" />
          <p>After some moment, you will be greeted with a panel like below.</p>
          <Image src={imgTutorial2} className="rounded-md" />
          <p>
            In this panel, you are able to download the Video+Audio or Only
            Audio.
          </p>
          <p>
            Click the desired option and let us do the magic and start the
            download.
          </p>
          <Image src={imgTutorial3} className="rounded-md" />
          <p>
            Sometimes, system opens a new tab containing the resource instead of
            directly downloading the resource. If this happens, click three dots
            on bottom left.
          </p>
          <Image src={imgTutorial4} className="rounded-md" />
          <p>Then click the Download button.</p>
          <Image src={imgTutorial5} className="rounded-md" />
        </MarkdownRenderer>
      </div>
    </>
  );
};

export default BaseDownloaderPage;
