import React from "react";

const Test = ({ products }) => {
  console.log(
    products?.map((product) => product.category),
    "from test page"
  );
  return <div>this is the test page</div>;
};

export default Test;
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const data = await res.json();
  const product = data?.map((category) => category.products[0]);
  return {
    props: {
      products: product,
    },
  };
};
