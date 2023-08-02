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

const Features = ({ products }) => {
  const { Meta } = Card;
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          margin: "30px 0px",
        }}
      >
        Explore Products
      </h2>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products?.map((product) => (
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
                  background: "#000",
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
              <Link href={`/product/${product?._id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
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
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Features;
