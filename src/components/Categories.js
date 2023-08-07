import { Button, Row, Col } from "antd";
import Link from "next/link";
import React from "react";

const Categories = ({ products }) => {
  return (
    <>
      <span
        style={{
          marginRight: "20px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "navy",
          fontFamily: "cursive",
        }}
      >
        FEATURED PRODUCTS:
      </span>
      <div
        style={{
          border: "1px solid navy",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <Row gutter={16}>
          {products.map((category) => (
            <Col key={category._id} xs={24} sm={12} md={8} lg={6}>
              <Link href={`/category/${category.category}`}>
                <Button
                  type="primary"
                  style={{ marginBottom: "5px", width: "100%" }}
                >
                  {category?.category}
                </Button>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Categories;
