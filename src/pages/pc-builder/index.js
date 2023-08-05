import styles from "../../styles/pcbuilder.module.css";
import { Button } from "antd";
import Icons from "../../assets/icons/icons8-processor-64.png";
import Image from "next/image";
import Link from "next/link";

const PcBuilderPage = ({ products }) => {
  const items = products?.map((product) => product.products[0]);
  return (
    <div className={styles.pcBuilder}>
      <h1 style={{ marginBottom: "25px" }}>Build your own pc</h1>
      {items?.map((item) => (
        <div key={item._id} className={styles.content}>
          <div className={styles.itemContainer}>
            <Image src={Icons} alt={item.category} />
            <span className={styles.itemLabel}>{item.category}</span>
          </div>
          <div>
            <Link
              href={{
                pathname: `/pc-builder/[category]`,
                query: {
                  products: JSON.stringify(products),
                  category: item.category,
                },
              }}
              as={`/pc-builder/${item.category}`}
            >
              <Button className={styles.buttonContainer}>SELECT</Button>
            </Link>
          </div>
        </div>
      ))}
      <div style={{ margin: "15px 0px" }}>
        <Button className={styles.buttonContainer}>COMPLETE BUILD</Button>
      </div>
    </div>
  );
};

export default PcBuilderPage;

export const getServerSideProps = async () => {
  const res = await fetch("https://pc-builder-ruby.vercel.app/api/v1/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
