import React from 'react';
import Styles from './pincode.module.css';
import { useState } from 'react';

const PincodeData = () => {
    const [copiedSnippet, setCopiedSnippet] = useState(null);

    const snippets = {
        combined: `
            curl -X GET \\
            'http://localhost:3000/server/api_application_function/api/v1/pincodedata?pincode=631102' \\
            -H 'Authorization: Bearer YOUR_API_KEY'
        `.trim(),
    };

    const handleCopy = (snippetKey) => {
        navigator.clipboard.writeText(snippets[snippetKey]);
        setCopiedSnippet(snippetKey);
        setTimeout(() => setCopiedSnippet(null), 2000);
    };

    return (
        <div className={Styles.pincodemaindiv}>
            <div className={Styles.content}>
                <h2>Pincode Data API Documentation</h2>
                <hr />

                <div>
                    <h3>Overview</h3>
                    <p>
                        The Pincode Data API provides access to detailed information about various post offices and their respective pin codes across different districts in the state of Tamil Nadu.
                        This API allows users to retrieve data such as the office name, pincode, district, taluk, state, and the timestamps when the records were created and modified.
                        The API supports real-time updates, ensuring that users have access to the most current pincode information.
                    </p>
                </div>
                <hr />

                <div>
                    <h3>Key Features:</h3>
                    <ul>
                        <li><strong>Real-Time Pincode Information:</strong> Get accurate and up-to-date details about different post offices and their respective pin codes.</li>
                        <li><strong>Detailed Record Data:</strong> Includes office name, pincode, district, taluk, state, and timestamps for record creation and modification.</li>
                        <li><strong>Easy Integration:</strong> The API can be easily integrated into any front-end or back-end system for real-time access to pincode data across Tamil Nadu.</li>
                    </ul>
                </div>
                <hr />

                <div>
                    <h3>Supported Data Fields:</h3>
                    <ul>
                        <li><strong>officeName:</strong> The name of the post office.</li>
                        <li><strong>pincode:</strong> The pin code assigned to the office.</li>
                        <li><strong>districtName:</strong> The district where the post office is located.</li>
                        <li><strong>taluk:</strong> The taluk (sub-district) where the post office is located.</li>
                        <li><strong>stateName:</strong> The state in which the post office is located (e.g., Tamil Nadu).</li>
                        <li><strong>ROWID:</strong> A unique identifier for each record.</li>
                    </ul>
                </div>
                <hr />

                <div>
                    <h3>Request Format</h3>
                    <pre className={Styles.codeBlock}>
                        {snippets.combined}
                    </pre>
                    <button
                        className={Styles.copyButton}
                        onClick={() => handleCopy("combined")}
                    >
                        {copiedSnippet === "combined" ? "Copied!" : "Copy to Clipboard"}
                    </button>
                    <p>
                        This combined format includes the endpoint, query parameters, and authorization header for a complete API request.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PincodeData;
