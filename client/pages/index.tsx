import Navbar from '../components/Navbar';

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
    </div>
  );
}
