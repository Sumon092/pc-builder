import styles from "../../styles/pcbuilder.module.css";
import { Button, Space } from "antd";
import Icons from "../../assets/icons/icons8-processor-64.png";
import Image from "next/image";

const PcBuilderPage = () => {
  return (
    <div className={styles.pcBuilder}>
      <h1>Build your own pc</h1>
      <div className={styles.content}>
        <div>
          <Image src={Icons} alt="processor" />
        </div>
        <div>
          <Button className={styles.buttonContainer}>SELECT</Button>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderPage;
