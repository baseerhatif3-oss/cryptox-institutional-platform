import React from "react";

import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <div
        style={{
          color: "white",
        }}
      >
        <h1>
          Crypto Dashboard
        </h1>

        <p>
          Exchange is running
          successfully.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;