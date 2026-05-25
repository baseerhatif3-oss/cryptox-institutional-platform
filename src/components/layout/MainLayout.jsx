import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

const MainLayout = ({
  children,
}) => {

  return (

    <div className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <TopNavbar />

        <main className="p-8">

          {children}

        </main>

      </div>

    </div>
  );
};

export default MainLayout;