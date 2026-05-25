import Sidebar from "./Sidebar";

import TopNavbar from "./TopNavbar";

const MainLayout = ({
  children,
}) => {

  return (

    <div className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">

        <TopNavbar />

        <main className="p-4 md:p-8">

          {children}

        </main>

      </div>

    </div>
  );
};

export default MainLayout;