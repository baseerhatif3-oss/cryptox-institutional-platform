import React from "react";

import ExchangeAnalytics from "../components/ExchangeAnalytics";

import KYCReviewPanel from "../components/KYCReviewPanel";

const Admin = () => {

  return (

    <div className="space-y-8 text-white">

      {/* HEADER */}

      <div>

        <h1 className="text-5xl font-bold">
          Admin Panel
        </h1>

        <p className="text-gray-400 mt-3">
          Professional exchange management dashboard
        </p>

      </div>

      {/* ANALYTICS */}

      <ExchangeAnalytics />

      {/* KYC */}

      <KYCReviewPanel />

    </div>
  );
};

export default Admin;