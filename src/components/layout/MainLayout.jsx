import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

const MainLayout = ({ children }) => {

  return (

    <div className="bg-black min-h-screen text-white">

      <Sidebar />

      <div className="ml-[260px]">

        <TopNavbar />

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
};

export default MainLayout;