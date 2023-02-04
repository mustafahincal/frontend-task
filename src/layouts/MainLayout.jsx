import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
};

export default MainLayout;
