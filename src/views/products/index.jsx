import React, { useState } from "react";
import Navigation from "../../components/navigation/index.jsx";
import { ProductHeader, ProductLink } from "./layout/index.jsx";
import styled from "@emotion/styled";

const Title = styled.h2`
    text-align: left;
`;

const Products = ({
    setCurrentView
}) => {
    return (
        <>
          <Title>RevRender Products</Title>
          <ProductHeader>Maddog</ProductHeader>
          <ProductLink>
            - <a onClick={() => setCurrentView("BLINKER_MOUNTS")}>Maddog Gen 1 Double Blinker Mounts</a>
          </ProductLink>
          <ProductHeader>Ruckus</ProductHeader>
          <ProductLink>
            - <a onClick={() => setCurrentView("RUCKUS_DOUBLE_BLINKER_MOUNTS")}>Ruckus Double Blinker Mounts</a>
          </ProductLink>
          <ProductLink>
            - <a onClick={() => setCurrentView("RUCKUS_RINGS")}>PCV Plate Rings</a>
          </ProductLink>
          <ProductHeader>Universal</ProductHeader>
          <ProductLink>
            - <a onClick={() => setCurrentView("SPEEDO_CASE")}>Speedometer Case</a>
          </ProductLink>
          <ProductLink>
            - <a onClick={() => setCurrentView("SPEEDO_MOUNTS")}>Speedometer Mounts</a>
          </ProductLink>
          <ProductLink>
            - <a onClick={() => setCurrentView("SPEEDO_CONVERSION")}>Speedometer Conversion Kit</a>
          </ProductLink>
          <ProductLink>
            - <a onClick={() => setCurrentView("SPEEDO_WIRE_HARNESS")}>Speedometer Wire Harness</a>
          </ProductLink>
        </>
     )
}

export default Products;