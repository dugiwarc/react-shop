/** @format */

import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

// Components
import Product from "../components/Product";

// Main
const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
