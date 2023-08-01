import Features from "@/components/Features";
import React from "react";

const HomePage = ({ products }) => {
  const product = products?.map((category) => category.products[0]);
  return (
    <div>
      <Features key={product._id} products={product}></Features>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
