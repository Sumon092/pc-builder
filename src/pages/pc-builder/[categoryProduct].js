import Category from "@/components/Category";
import { useRouter } from "next/router";
import React from "react";

const PcBuilderCategory = ({ products }) => {
  const router = useRouter();
  const { categoryProduct } = router.query;
  const filteredCategory = products.filter(
    (p) => p.category === categoryProduct
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Choose Your {categoryProduct} Here
      </h2>
      <Category
        categoryProduct={categoryProduct}
        filteredCategory={filteredCategory}
      />
    </div>
  );
};

export default PcBuilderCategory;
export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-ruby.vercel.app/api/v1/products/category/${params.categoryProduct}`
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
