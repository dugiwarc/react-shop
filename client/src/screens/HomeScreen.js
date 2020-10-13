/** @format */

import React from "react";
import { Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

// Components
import Product from "../components/Product";

// Data
import products from "../products";

// Main
const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={uuidv4()} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
