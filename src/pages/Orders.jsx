import MainLayout from "../components/layout/MainLayout";

import EmptyState from "../components/EmptyState";

const Orders = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">

          Orders

        </h1>

        <p className="text-zinc-500 mt-2">

          Monitor your active and completed exchange orders

        </p>

      </div>

      <EmptyState
        title="No Active Orders"
        description="Your active buy and sell orders will appear here after placing trades on the exchange."
      />

    </MainLayout>
  );
};

export default Orders;