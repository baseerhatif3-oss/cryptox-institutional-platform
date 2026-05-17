import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

const TradingChart = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
      <AdvancedRealTimeChart
        theme="dark"
        symbol="BINANCE:BTCUSDT"
        timezone="Etc/UTC"
        locale="en"
        width="100%"
        height="600"
        allow_symbol_change
      />
    </div>
  );
};

export default TradingChart;