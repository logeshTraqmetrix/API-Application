import React from 'react';
import Styles from './stockData.module.css'


const StocksData = () => {
    return (
        <div className={Styles.stockmaindiv}>
            <div className={Styles.content}>
                <h2>Stock Data Api Documentation</h2>
                <hr />
                <div>
                    <h3>Overview</h3>
                    <p>
                        The Stock Data API provides real-time and historical information about various stock indices in the Indian stock market. The API supports retrieving detailed stock data such as opening, closing, high, and low index values, volume, points change, price-to-earnings ratio (PE), price-to-book ratio (PB), and more. It covers popular indices like Nifty 50, Nifty Bank, Nifty Auto, Nifty Financial Services, Nifty Energy, and others, offering a comprehensive view of market performance across different sectors.
                    </p>
                </div>
                <hr />
                <div>
                    <h3>Key Features:</h3>
                    <ul>
                        <li><strong>Real-Time Stock Data:</strong> Fetch up-to-date stock index data including open, close, high, and low values.</li>
                        <li><strong>Stock Performance Metrics:</strong> View important stock metrics such as points change, percentage change, volume, dividend yield, PB ratio, PE ratio, and turnover.</li>
                        <li><strong>Historical Data:</strong> Retrieve historical index data for any specific date.</li>
                        <li><strong>Easy Integration:</strong> The API is designed to be easy to integrate with any front-end or back-end system for real-time stock tracking and analysis.</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <h3>Supported Indices:</h3>
                    <ul>
                        <li>Nifty 50</li>
                        <li>Nifty Next 50</li>
                        <li>Nifty 100</li>
                        <li>Nifty 200</li>
                        <li>Nifty 500</li>
                        <li>Nifty Midcap 50</li>
                        <li>Nifty Midcap 100</li>
                        <li>Nifty Smallcap 100</li>
                        <li>Nifty Auto</li>
                        <li>Nifty Bank</li>
                        <li>Nifty Energy</li>
                        <li>Nifty Financial Services</li>
                        <li>Nifty50 Dividend Points</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <p>
                        This API can be used to track market trends, analyze stock performance, and provide users with up-to-the-minute stock index statistics for research, trading, or investment purposes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StocksData;
