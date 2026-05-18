import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

const TradingChart = ({
  symbol,
}) => {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden">
      <AdvancedRealTimeChart
        theme="dark"
        autosize
        symbol={symbol}
        interval="15"
        timezone="Etc/UTC"
        hide_side_toolbar={false}
        allow_symbol_change={false}
        withdateranges
      />
    </div>
  );
};

export default TradingChart;