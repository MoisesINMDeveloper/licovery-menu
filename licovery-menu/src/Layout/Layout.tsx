import { Header } from "../components/shared/header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div>Pie de página</div>
    </>
  );
};

export default Layout;
