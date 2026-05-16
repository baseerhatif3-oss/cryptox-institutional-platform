import React from "react";

const TradingViewWidget = () => {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-slate-800">
      <iframe
        title="TradingView"
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=BINANCE:BTCUSDT&interval=60&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&hideideas=1"
        width="100%"
        height="100%"
        frameBorder="0"
        allowTransparency="true"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default TradingViewWidget;