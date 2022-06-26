import Link from 'next/link';

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem = ({ title, href }: NavItemProps) => {
  return (
    <Link href={href}>
      <a className="px-4 py-1 mx-2 bg-neutral-800 rounded-md hover:bg-neutral-700 transition duration-100 text-neutral-300 hover:text-neutral-100">
        {title}
      </a>
    </Link>
  );
};

interface NavbarProps {
  items: NavItemProps[];
}

const Navbar = ({ items }: NavbarProps) => {
  const navItemsDOM = items.map((item, idx) => (
    <NavItem title={item.title} href={item.href} key={idx} />
  ));
  return (
    <>
      <Link href="/">
        <a className="flex justify-center bg-neutral-900 text-neutral-400 font-medium py-2 hover:text-neutral-100 transition duration-100 border-b-2 border-b-neutral-800">
          Download YouTube Video
        </a>
      </Link>
      <div className="flex justify-center bg-neutral-900 p-2">
        {navItemsDOM}
      </div>
    </>
  );
};

export default Navbar;
