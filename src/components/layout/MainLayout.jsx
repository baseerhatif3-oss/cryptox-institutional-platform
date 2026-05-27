import Sidebar from "./Sidebar";

import TopNavbar from "./TopNavbar";

import MobileNavbar from "./MobileNavbar";

import Footer from "./Footer";

const MainLayout = ({
  children,
}) => {

  return (

    <div className="min-h-screen bg-black text-white flex">

      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">

        <div className="flex-1 p-6 lg:p-10 pb-32 xl:pb-10">

          <TopNavbar />

          {children}

        </div>

        <Footer />

      </div>

      <MobileNavbar />

    </div>
  );
};

export default MainLayout;