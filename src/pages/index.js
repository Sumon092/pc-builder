import Categories from "@/components/Categories";
import Features from "@/components/Features";
import React from "react";

const HomePage = ({ products }) => {
  const product = products?.map((category) => category.products[0]);
  return (
    <>
      <Categories
        key={product._id}
        products={product}
        categories={products}
      ></Categories>
      <Features key={product._id} products={product}></Features>
    </>
  );
};

export default HomePage;
export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-ruby.vercel.app/api/v1/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
