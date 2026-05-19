import {
  AdvancedRealTimeChart,
  MarketOverview,
} from "react-ts-tradingview-widgets";

const Markets = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Markets
          </h1>

          <p className="text-slate-400 mt-3">
            Professional live trading terminal
          </p>
        </div>

        {/* MARKET OVERVIEW */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 mb-8 overflow-hidden">
          <MarketOverview
            colorTheme="dark"
            height={500}
            width="100%"
            showFloatingTooltip
            tabs={[
              {
                title:
                  "Crypto",

                symbols: [
                  {
                    s:
                      "BINANCE:BTCUSDT",

                    d:
                      "Bitcoin",
                  },

                  {
                    s:
                      "BINANCE:ETHUSDT",

                    d:
                      "Ethereum",
                  },

                  {
                    s:
                      "BINANCE:SOLUSDT",

                    d:
                      "Solana",
                  },

                  {
                    s:
                      "BINANCE:XRPUSDT",

                    d: "XRP",
                  },
                ],
              },
            ]}
          />
        </div>

        {/* ADVANCED CHART */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 overflow-hidden">
          <AdvancedRealTimeChart
            theme="dark"
            symbol="BINANCE:BTCUSDT"
            width="100%"
            height={700}
            timezone="Etc/UTC"
            style="1"
            locale="en"
            enable_publishing={false}
            hide_top_toolbar={false}
            hide_side_toolbar={false}
            allow_symbol_change={true}
            withdateranges={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Markets;