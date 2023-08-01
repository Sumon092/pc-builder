import ErrorImage from "../assets/images/404_Error_Page.png";
import Image from "next/image";
import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Pc-Builder-404 Not Found</title>
        <meta name="description" content="This is pc builder made by next-js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          margin: "50px auto",
          justifyContent: "center",
        }}
      >
        <Image src={ErrorImage} width="100%" height="100%" alt="error_image" />
      </div>
      <Link href="/">
        <Button type="primary" style={{ marginTop: "20px" }}>
          Back To Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
