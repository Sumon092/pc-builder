import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Categories = ({ products }) => {
  return (
    <>
      <div
        style={{ border: "1px solid gray", padding: "8px", marginTop: "10px" }}
      >
        {products.map((category) => (
          <Link key={category._id} href={`/category/${category.category}`}>
            <Button type="primary" style={{ marginRight: "10px" }}>
              {category?.category}
            </Button>
          </Link>
        ))}
      </div>
      {/* <div
        style={{ border: "1px solid gray", padding: "8px", marginTop: "10px" }}
      >
        {products.map((category) => (
          <Link key={category._id} href={`/category/${category.category}`}>
            <Button type="primary" style={{ marginRight: "10px" }}>
              {category?.category}
            </Button>
          </Link>
        ))}
      </div> */}
    </>
  );
};

export default Categories;
