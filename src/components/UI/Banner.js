import { Col, Row, Carousel } from "antd";
import styles from "@/styles/banner.module.css";
import Image from "next/image";
import Banner1 from "../../assets/images/Banner1.png";
import Banner2 from "@/assets/images/banner2.jpg";
import SideImage1 from "@/assets/images/side1.png";
import SideImage2 from "@/assets/images/side2.png";

const contentStyle = {
  height: "425px",
};

const Banner = () => (
  <>
    <div className={styles.bannerContainer}>
      <div className={styles.leftBanner}>
        <Carousel effect="fade" autoplay>
          <Row>
            <Col
              lg={{
                span: 24,
              }}
              style={contentStyle}
            >
              <Image fill src={Banner1} alt="computer" />
            </Col>
          </Row>
          <Row>
            <Col
              lg={{
                span: 24,
              }}
              style={contentStyle}
            >
              <Image src={Banner2} fill alt="pc" style={{ grayScale: "-5" }} />
            </Col>
          </Row>
        </Carousel>
      </div>
      <div className={styles.rightBanner}>
        <Image
          className={styles.imageContainerTop}
          src={SideImage2}
          alt=""
          style={{ marginTop: "5px" }}
        />

        <Image
          className={styles.imageContainerBottom}
          responsive="true"
          src={SideImage1}
          alt=""
          style={{ marginRight: "5px" }}
        />
      </div>
    </div>
  </>
);
export default Banner;
