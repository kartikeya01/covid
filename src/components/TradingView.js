import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const TradingView = () => {
    return (
        <div>
            <div className="TradingView">
                <TradingViewWidget
                    symbol="AMEX:SPY"
                    theme={Themes.DARK}
                    locale="en"
                    autosize
                />
            </div>
            <div className="TradingView">
                <TradingViewWidget
                    symbol="COINBASE:BTCUSD"
                    theme={Themes.DARK}
                    locale="en"
                    autosize
                />
            </div>
            <div className="TradingView">
                <TradingViewWidget
                    symbol="COINBASE:ETHUSD"
                    theme={Themes.DARK}
                    locale="en"
                    autosize
                />
            </div>
        </div>
    );
}
 
export default TradingView;
