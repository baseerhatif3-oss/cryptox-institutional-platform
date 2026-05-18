import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

const TradingChart = ({
  symbol = "BINANCE:BTCUSDT",
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
      <AdvancedRealTimeChart
        theme="dark"
        symbol={symbol}
        autosize
        interval="15"
        timezone="Etc/UTC"
        hide_top_toolbar={false}
        hide_legend={false}
        allow_symbol_change
        withdateranges
      />
    </div>
  );
};

export default TradingChart;