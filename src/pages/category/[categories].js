import Category from "@/components/Category";
import { useRouter } from "next/router";

const CategoryPage = ({ product }) => {
  const router = useRouter();
  const { categories } = router.query;
  const filteredCategory = product.filter((p) => p.category === categories);
  return (
    <div>
      <h3>Category: {categories}</h3>
      <Category filteredCategory={filteredCategory}></Category>
    </div>
  );
};

export default CategoryPage;
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/products/category/${params.categories}`
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
  const res = await fetch(`http://localhost:5000/api/v1/products`);
  const data = await res.json();
  const paths = data?.map((category) => ({
    params: { categories: category?.toString() },
  }));
  console.log(paths);
  return {
    paths,
    fallback: "blocking",
  };
};
