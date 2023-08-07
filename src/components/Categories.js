import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Categories = ({ products }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid navy",
          padding: "10px",
          marginTop: "10px",
        }}
      >
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
