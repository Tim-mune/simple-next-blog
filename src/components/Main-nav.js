import Link from "next/link";
const MainNav = () => {
  const Logo = () => {
    return (
      <div className="flex items-start justify-center p-2">
        <h1>king tim blog </h1>
      </div>
    );
  };
  return (
    <header className="flex items-center justify-between p-2">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="flex justify-between items-center p-2">
        <ul>
          <li>
            <Link className="text-teal-300 p-1 tracking-widest" href="/posts">
              posts
            </Link>
            <Link className="text-teal-300 p-1 tracking-widest" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
