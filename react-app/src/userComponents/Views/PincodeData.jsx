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
                <h1>Pincode Data API Documentation</h1>

                <h2>Overview</h2>
                <p>
                    The Pincode Data API provides access to detailed information about various post offices and their respective pin codes across different districts in the state of Tamil Nadu.
                    This API allows users to retrieve data such as the office name, pincode, district, taluk, state, and the timestamps when the records were created and modified.
                    The API supports real-time updates, ensuring that users have access to the most current pincode information.
                </p>

                <h2>Key Features:</h2>
                <ul>
                    <li><strong>Real-Time Pincode Information:</strong> Get accurate and up-to-date details about different post offices and their respective pin codes.</li>
                    <li><strong>Detailed Record Data:</strong> Includes office name, pincode, district, taluk, state, and timestamps for record creation and modification.</li>
                    <li><strong>Easy Integration:</strong> The API can be easily integrated into any front-end or back-end system for real-time access to pincode data across Tamil Nadu.</li>
                </ul>

                <h2>Supported Data Fields:</h2>
                <p>The following are the fields provided for each record in the Pincode Data API:</p>
                <ul>
                    <li><strong>officeName:</strong> The name of the post office.</li>
                    <li><strong>pincode:</strong> The pin code assigned to the office.</li>
                    <li><strong>districtName:</strong> The district where the post office is located.</li>
                    <li><strong>taluk:</strong> The taluk (sub-district) where the post office is located.</li>
                    <li><strong>stateName:</strong> The state in which the post office is located (e.g., Tamil Nadu).</li>
                    <li><strong>ROWID:</strong> A unique identifier for each record.</li>
                </ul>
                <div>
                    <h2>Request Format</h2>
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















// import React, { useState } from 'react';
// import Styles from './pincode.module.css';

// const PincodeData = () => {
//     const [copiedSnippet, setCopiedSnippet] = useState(null);

//     const snippets = {
//         endpoint: `
// http://localhost:3000/server/api_application_function/api/v1/pincodedata
//         `.trim(),
//         curl: `
// curl -X GET \\
//   'http://localhost:3000/server/api_application_function/api/v1/pincodedata?pincode=631102' \\
//   -H 'Authorization: Bearer YOUR_API_KEY'
//         `.trim(),
//         params: `
// Authorization: Bearer <API_KEY>
//         `.trim(),
//         combined: `
// curl -X GET \\
//   'http://localhost:3000/server/api_application_function/api/v1/pincodedata?pincode=631102' \\
//   -H 'Authorization: Bearer YOUR_API_KEY'
//         `.trim(),
//     };

//     const handleCopy = (snippetKey) => {
//         navigator.clipboard.writeText(snippets[snippetKey]);
//         setCopiedSnippet(snippetKey);
//         setTimeout(() => setCopiedSnippet(null), 2000);
//     };

//     return (
//         <div className={Styles.pincodemaindiv}>
//             <div className={Styles.content}>
//                 <h1>Pincode Data API Documentation</h1>

//                 <h2>API Endpoint</h2>
//                 <pre className={Styles.codeBlock}>
//                     {snippets.endpoint}
//                 </pre>
//                 <button
//                     className={Styles.copyButton}
//                     onClick={() => handleCopy("endpoint")}
//                 >
//                     {copiedSnippet === "endpoint" ? "Copied!" : "Copy to Clipboard"}
//                 </button>
//                 <p>
//                     This is the base endpoint to access the Pincode Data API. It retrieves detailed pincode information.
//                 </p>

//                 <h2>cURL Request</h2>
//                 <pre className={Styles.codeBlock}>
//                     {snippets.curl}
//                 </pre>
//                 <button
//                     className={Styles.copyButton}
//                     onClick={() => handleCopy("curl")}
//                 >
//                     {copiedSnippet === "curl" ? "Copied!" : "Copy to Clipboard"}
//                 </button>
//                 <p>
//                     Use this cURL command to make a GET request with the necessary parameters and headers to fetch data for a specific pincode.
//                 </p>

//                 <h2>Authorization Parameters</h2>
//                 <pre className={Styles.codeBlock}>
//                     {snippets.params}
//                 </pre>
//                 <button
//                     className={Styles.copyButton}
//                     onClick={() => handleCopy("params")}
//                 >
//                     {copiedSnippet === "params" ? "Copied!" : "Copy to Clipboard"}
//                 </button>
//                 <p>
//                     Add an <strong>Authorization</strong> header to your request. Replace <code>&lt;API_KEY&gt;</code> with your actual API key.
//                 </p>

//                 <h2>Combined Request Format</h2>
//                 <pre className={Styles.codeBlock}>
//                     {snippets.combined}
//                 </pre>
//                 <button
//                     className={Styles.copyButton}
//                     onClick={() => handleCopy("combined")}
//                 >
//                     {copiedSnippet === "combined" ? "Copied!" : "Copy to Clipboard"}
//                 </button>
//                 <p>
//                     This combined format includes the endpoint, query parameters, and authorization header for a complete API request.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default PincodeData;
