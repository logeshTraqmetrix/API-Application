import React from 'react'
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";


const Playground = () => {
    return (
        <div style={{ margin: "20px" }}>
        
          <SwaggerUI url="./pincodeSwagger.json" />
        </div>
      );
}

export default Playground