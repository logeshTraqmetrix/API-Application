import React from 'react'
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";


const StockDataPlayGround = () => {
    return (
        <div style={{ margin: "20px" }}>
        
          <SwaggerUI url="/server/api_application_function/stockSwagger" />
        </div>
      );
}

export default StockDataPlayGround