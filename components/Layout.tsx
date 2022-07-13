import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
    {
      title: "Twitter",
      href: "/twitter",
    },
  ];

  return (
    <>
      <Navbar items={navItems} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
