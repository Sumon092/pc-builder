import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Categories = ({ products }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <span style={{ marginRight: "20px", fontSize: "20px" }}>
          Featured Products:
        </span>
        {products.map((category) => (
          <Link key={category._id} href={`/category/${category.category}`}>
            <Button type="primary" style={{ marginRight: "10px" }}>
              {category?.category}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
