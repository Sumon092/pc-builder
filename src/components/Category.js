import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  StockOutlined,
  AppstoreAddOutlined,
  DollarOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useProductContext } from "@/context/ProductContext";

const Category = ({ filteredCategory, categoryProduct }) => {
  const { addProduct } = useProductContext();

  const handleAddToBuilder = (product) => {
    addProduct(product);
  };
  const { Meta } = Card;
  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {filteredCategory?.map((product) => (
          <Col
            style={{ marginBottom: "25px" }}
            key={product?._id}
            className="gutter-row"
            span={6}
          >
            <Card
              hoverable
              cover={
                <Image
                  src={product?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="product image"
                />
              }
            >
              <Meta title={product?.productName} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "navy",
                  width: "100%",
                }}
              ></div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span>
                  <StockOutlined /> {product?.status}
                </span>
                <span>
                  <DollarOutlined /> {product?.price} $
                </span>
                <span>
                  <AppstoreAddOutlined /> {product?.category}
                </span>
              </p>
              <p style={{ display: "block" }}>
                <StarOutlined /> {product?.personalRating}
              </p>
              {!categoryProduct ? (
                <Link href={`/product/${product?._id}`}>
                  <p
                    style={{
                      fontSize: "15px",
                      marginTop: "20px",
                      backgroundColor: "navy",
                      color: "white",
                      width: "100%",
                      padding: "2px 5px ",
                      fontWeight: "300",
                      letterSpacing: "3px",
                      textAlign: "center",
                    }}
                  >
                    Show Details <ArrowRightOutlined />
                  </p>
                </Link>
              ) : (
                <Link
                  href="/pc-builder"
                  onClick={() => handleAddToBuilder(product)}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      marginTop: "20px",
                      backgroundColor: "navy",
                      color: "white",
                      width: "100%",
                      padding: "2px 5px ",
                      fontWeight: "300",
                      letterSpacing: "3px",
                      textAlign: "center",
                    }}
                  >
                    Add To Builder
                    <ArrowRightOutlined />
                  </p>
                </Link>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Category;
