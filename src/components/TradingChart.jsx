import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

const TradingChart = ({
  symbol = "BINANCE:BTCUSDT",
}) => {
  return (
    <div className="rounded-3xl overflow-hidden border border-slate-800">
      <AdvancedRealTimeChart
        theme="dark"
        symbol={symbol}
        autosize
        interval="15"
        timezone="Etc/UTC"
        hide_top_toolbar={false}
        hide_side_toolbar={false}
        allow_symbol_change
      />
    </div>
  );
};

export default TradingChart;