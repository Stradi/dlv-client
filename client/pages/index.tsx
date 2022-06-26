import Navbar from '../components/Navbar';
import Downloader from '../components/Downloader';

export default function Home() {
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
      <Downloader title="Download YouTube Video" />
    </div>
  );
}
