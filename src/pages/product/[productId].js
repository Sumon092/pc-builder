import { Col, Row } from "antd";
import Image from "next/image";
import {
  StockOutlined,
  AppstoreAddOutlined,
  DollarOutlined,
  StarOutlined,
} from "@ant-design/icons";

const ProductDetail = ({ product }) => {
  return (
    <Row style={{ padding: "24px" }}>
      <Col span={12}>
        {" "}
        <Image
          src={product?.image}
          width={550}
          height={350}
          responsive
          alt="product image"
        />
      </Col>
      <Col span={12}>
        <h1>{product?.productName}</h1>
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
            fontSize: "15px",
          }}
        >
          <span>
            <DollarOutlined /> {product?.price}
          </span>
          <span>
            <StockOutlined /> {product?.status}
          </span>
          <span>
            <AppstoreAddOutlined /> {product?.category}
          </span>
          <span>
            <StarOutlined />
            Personal Rating: {product?.personalRating}
          </span>
          <span>
            <StarOutlined />
            Average Rating: {product?.averageRating}
          </span>
        </p>
        <p style={{ marginBottom: "0px", fontSeize: "20px" }}>Key Features</p>
        <hr />
        <p style={{ fontSize: "15px" }}>
          Brand Name: {product?.keyFeatures?.brand}
        </p>
        <p style={{ fontSize: "15px" }}>Model: {product?.keyFeatures?.model}</p>
        <p style={{ fontSize: "15px" }}>
          Specification:
          {product?.keyFeatures?.specification}
        </p>
        <p style={{ fontSize: "15px" }}>
          Port:
          {product?.keyFeatures?.port}
        </p>
        <p style={{ fontSize: "15px" }}>
          voltage : {product?.keyFeatures?.voltage}
        </p>
        <p style={{ fontSize: "15px" }}>Description: {product?.description}</p>
        <p style={{ fontSize: "15px" }}>Reviews: {product?.reviews}</p>
      </Col>
    </Row>
  );
};

export default ProductDetail;
export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-ruby.vercel.app/api/v1/products/${params.productId}`
  );
  const data = await res.json();
  console.log(data, "from dynamic route");

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
  const paths = data.map((product) => ({
    params: { productId: product._id.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
