import Sidebar from "./Sidebar";

import TopNavbar from "./TopNavbar";

const MainLayout = ({
  children,
}) => {

  return (

    <div className="min-h-screen bg-black text-white flex">

      <Sidebar />

      <div className="flex-1 lg:ml-0 p-4 lg:p-8 overflow-hidden">

        <TopNavbar />

        {children}

      </div>

    </div>
  );
};

export default MainLayout;