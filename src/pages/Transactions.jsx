import MainLayout from "../components/layout/MainLayout";

import EmptyState from "../components/EmptyState";

const Transactions = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">

          Transactions

        </h1>

        <p className="text-zinc-500 mt-2">

          Deposit, withdrawal and trading history

        </p>

      </div>

      <EmptyState
        title="No Transactions Yet"
        description="Your deposit, withdrawal and trading history will appear here once activity begins on your account."
      />

    </MainLayout>
  );
};

export default Transactions;