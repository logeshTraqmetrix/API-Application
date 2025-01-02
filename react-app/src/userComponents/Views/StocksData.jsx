import React from 'react';
import Styles from './stockData.module.css';

const StocksData = () => {
    return (
        <div className={Styles.stockmaindiv}>
            <div className={Styles.content}>
                <h2>Stock Data API Documentation</h2>
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
                    <h3>Filter Parameters:</h3>
                    <p>The API supports flexible filtering through query parameters to refine your results. Below is the format for applying filters in the endpoint:</p>
                    <h4>Query Parameters:</h4>
                    <ul>
                        <li><strong>Pagination:</strong>
                            <ul>
                                <li><code>page</code>: Specify the page number (default is <code>1</code>).</li>
                                <li><code>limit</code>: Specify the number of records per page (default is <code>10</code>).</li>
                            </ul>
                        </li>
                        <li><strong>Filter Operators:</strong>
                            <ul>
                                <li><code>&lt;field&gt;.equals</code>: Exact match (e.g., <code>name.equals=Reliance</code>).</li>
                                <li><code>&lt;field&gt;.notEquals</code>: Not equal (e.g., <code>sector.notEquals=Automobile</code>).</li>
                                <li><code>&lt;field&gt;.greaterThan</code>: Greater than (e.g., <code>price.greaterThan=1000</code>).</li>
                                <li><code>&lt;field&gt;.lessThan</code>: Less than (e.g., <code>price.lessThan=500</code>).</li>
                                <li><code>&lt;field&gt;.greaterThanEqual</code>: Greater than or equal to (e.g., <code>price.greaterThanEqual=200</code>).</li>
                                <li><code>&lt;field&gt;.lessThanEqual</code>: Less than or equal to (e.g., <code>price.lessThanEqual=800</code>).</li>
                                <li><code>&lt;field&gt;.contains</code>: Contains substring (e.g., <code>name.contains=Inf</code>).</li>
                                <li><code>&lt;field&gt;.startsWith</code>: Starts with substring (e.g., <code>name.startsWith=Nift</code>).</li>
                                <li><code>&lt;field&gt;.endsWith</code>: Ends with substring (e.g., <code>name.endsWith=50</code>).</li>
                                <li><code>&lt;field&gt;.isNull</code>: Check for null values (e.g., <code>dividendYield.isNull</code>).</li>
                                <li><code>&lt;field&gt;.isNotNull</code>: Check for non-null values (e.g., <code>turnover.isNotNull</code>).</li>
                            </ul>
                        </li>
                    </ul>
                    <h4>Example Usage:</h4>
                    <p>Example of a filtered API request:</p>
                    <pre><code>
GET /api/stocks?page=2&limit=5&price.greaterThan=100&name.contains=Nifty
                    </code></pre>
                    <p>This request retrieves the second page of results with 5 records per page, where the stock price is greater than 100 and the name contains "Nifty".</p>
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
