import styles from "../../styles/pcbuilder.module.css";
import { Button } from "antd";
import Icons from "../../assets/icons/icons8-processor-64.png";
import Image from "next/image";
import Link from "next/link";
import { useProductContext } from "../../context/ProductContext";

const PcBuilderPage = ({ products }) => {
  const items = products?.map((product) => product.products[0]);
  const { selectedProducts, removeProduct, clearProducts } =
    useProductContext();
  console.log(selectedProducts, "selected product");
  const selectedCount = selectedProducts?.length;
  const handleCompleteBuild = () => {
    clearProducts();
  };
  return (
    <div className={styles.pcBuilder}>
      <h1 style={{ marginBottom: "25px" }}>Build your own pc</h1>
      {items?.map((item) => (
        <div key={item._id} className={styles.content}>
          {!selectedProducts.some((product) => product._id === item._id) ? (
            <>
              <div className={styles.itemContainer}>
                {" "}
                <Image src={Icons} alt={item.category} />
                <span className={styles.itemLabel}>{item.category}</span>
              </div>
              <div>
                <Link href={`/pc-builder/${item.category}`}>
                  <Button className={styles.buttonContainer}>Select</Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className={styles.itemContainer}>
                {" "}
                <Image
                  src={item?.image}
                  width={85}
                  height={55}
                  responsive="true"
                  alt={item.category}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "35px",
                  }}
                >
                  <span className={styles.itemLabel}>
                    Category: {item.category}
                  </span>
                  <span className={styles.itemLabel}>
                    Model:
                    {item.keyFeatures?.model}
                  </span>
                  <span className={styles.itemLabel}>Price: {item.price}</span>
                </div>
              </div>
              <div>
                <Button
                  className={styles.removeButton}
                  onClick={() => removeProduct(item._id)}
                >
                  Remove
                </Button>
              </div>
            </>
          )}
        </div>
      ))}
      <div className={styles.completeBuildButtonContainer}>
        {selectedCount >= 5 ? (
          <Button
            onClick={handleCompleteBuild}
            className={styles.buttonContainer}
          >
            COMPLETE BUILD
          </Button>
        ) : (
          <Button
            style={{ background: "yellow" }}
            className={styles.buttonContainer}
            disabled
          >
            COMPLETE BUILD
          </Button>
        )}
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
