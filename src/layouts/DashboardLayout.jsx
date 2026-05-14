import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

function DashboardLayout({
  children,
}) {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}

      <Navbar />

      {/* MAIN */}

      <div
        style={{
          display: "flex",
        }}
      >
        {/* SIDEBAR */}

        <Sidebar />

        {/* CONTENT */}

        <div
          style={{
            flex: 1,
            padding: "30px",
            overflowX: "hidden",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;