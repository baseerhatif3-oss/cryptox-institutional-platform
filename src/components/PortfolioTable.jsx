function PortfolioTable() {
  return (
    <div className="bg-slate-800 p-5 rounded-2xl mt-6">
      <h1 className="text-2xl font-bold mb-5">
        Portfolio
      </h1>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-slate-700">
            <th className="pb-3">
              Coin
            </th>

            <th className="pb-3">
              Amount
            </th>

            <th className="pb-3">
              Value
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="py-3">
              BTC
            </td>

            <td>0.42</td>

            <td>$26,000</td>
          </tr>

          <tr>
            <td className="py-3">
              ETH
            </td>

            <td>3.1</td>

            <td>$9,300</td>
          </tr>

          <tr>
            <td className="py-3">
              SOL
            </td>

            <td>24</td>

            <td>$3,480</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PortfolioTable;