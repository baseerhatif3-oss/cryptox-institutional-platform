import Sidebar from "./Sidebar";

import TopNavbar from "./TopNavbar";

import MobileNavbar from "./MobileNavbar";

const MainLayout = ({
  children,
}) => {

  return (

    <div className="min-h-screen bg-black text-white flex">

      <Sidebar />

      <div className="flex-1 min-w-0">

        <div className="p-6 lg:p-10 pb-32 xl:pb-10">

          <TopNavbar />

          {children}

        </div>

      </div>

      <MobileNavbar />

    </div>
  );
};

export default MainLayout;