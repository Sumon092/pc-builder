import Category from "@/components/Category";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const CategoryPage = ({ product }) => {
  const router = useRouter();
  const { categories } = router.query;
  const filteredCategory = product.filter((p) => p.category === categories);
  
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Category: {categories}
      </h2>
      <div style={{ textAlign: "center", margin: "20px 0px" }}>
        <Link href="/">
          <Button type="primary">Go Back To Categories</Button>
        </Link>
      </div>
      <Category filteredCategory={filteredCategory}></Category>
    </div>
  );
};

export default CategoryPage;
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-ruby.vercel.app/api/v1/products/category/${params.categories}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
    revalidate: 60 * 60,
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://pc-builder-ruby.vercel.app/api/v1/products`);
  const data = await res.json();
  const paths = data?.map((category) => ({
    params: { categories: category?.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
