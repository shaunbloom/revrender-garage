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
          <ProductHeader>Maddog Gen 1</ProductHeader>
            <ProductLink>
              - <a onClick={() => setCurrentView("BLINKER_MOUNTS")}>Double Blinker Mounts</a>
            </ProductLink>
          <ProductHeader>Maddog Gen 3 & 4</ProductHeader>
            <ProductLink>
              - <a onClick={() => setCurrentView("FUEL_PUMP_MOUNT")}>Fuel Pump Mount</a>
            </ProductLink>
          <ProductHeader>Ruckus</ProductHeader>
          <ProductLink>
              - <a onClick={() => setCurrentView("RUCKUS_FRONT_BLINKER_MOUNTS")}>Front Blinker Mounts</a>
            </ProductLink>
            <ProductLink>
              - <a onClick={() => setCurrentView("RUCKUS_SINGLE_BLINKER_MOUNTS")}>Single Blinker Mounts</a>
            </ProductLink>
            <ProductLink>
              - <a onClick={() => setCurrentView("RUCKUS_DOUBLE_BLINKER_MOUNTS")}>Double Blinker Mounts</a>
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