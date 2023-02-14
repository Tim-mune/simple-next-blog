import MainNav from "./Main-nav";

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
      {children}
    </>
  );
};

export default Layout;
