import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {

  return (

    <div className="min-h-screen bg-black text-white">

      <Sidebar />

      <div className="ml-[260px] p-8">
        {children}
      </div>

    </div>
  );
};

export default MainLayout;