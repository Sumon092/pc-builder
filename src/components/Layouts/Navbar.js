import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import DropdownCategory from "../DropdownCategory";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "navy",
      }}
    >
      <div className="demo-logo">
        <Link
          style={{ marginRight: "15px", backgroundColor: "navy" }}
          href="/"
          className={styles.navLink}
        >
          PC RELATIONS
        </Link>
        <Link href="" className={styles.navLink}>
          <DropdownCategory />
        </Link>
      </div>

      <Menu style={{ backgroundColor: "navy" }} mode="horizontal">
        <Link
          style={{ marginRight: "15px", backgroundColor: "navy" }}
          className={styles.navLink}
          href="/pc-builder"
        >
          <items className={styles.navLink}>PC BUILDER</items>
        </Link>
        {session?.user ? (
          <items className={styles.navLink}>
            <Button onClick={() => signOut()} type="primary" danger>
              LOGOUT
            </Button>
          </items>
        ) : (
          <Link className={styles.navLink} href="/login">
            <items className={styles.navLink}>LOGIN</items>
          </Link>
        )}
      </Menu>
    </Header>
  );
};
export default Navbar;
