import React from 'react'
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";


const PincodeDataPlayground = () => {
    return (
        <div style={{ margin: "20px" }}>
        
          <SwaggerUI url="/server/api_application_function/pincodeSwagger" />
        </div>
      );
}

export default PincodeDataPlayground