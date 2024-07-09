"use client";

import React, { useEffect, useRef, memo } from "react";
import Spinner from "../Common/Spinner/Spinner";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
          {
            "width": "980",
            "height": "610",
            "symbol": "NASDAQ:GOOG",
            "interval": "1",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "backgroundColor": "rgba(182, 182, 182, 1)",
            "gridColor": "rgba(0, 0, 0, 0.06)",
            "allow_symbol_change": true,
            "calendar": false,
            "support_host": "https://www.tradingview.com"
          }`;
    if (container.current) {
      container.current.innerHTML = "";
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <Spinner />
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
