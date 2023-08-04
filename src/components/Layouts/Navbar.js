import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import CategoryDropdown from "../DropdownCategory";
import DropdownCategory from "../DropdownCategory";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ marginRight: "20px" }} className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          PC RELATIONS
        </Link>
        <span
          style={{
            marginLeft: "20px",
          }}
        >
          <DropdownCategory />
        </span>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            fontSize: "20px",
            color: "white",
            fontWeight: "bold",
          }}
          href="/pc-builder"
        >
          <items>PC BUILDER</items>
        </Link>
        {session?.user ? (
          <items
            style={{
              textDecoration: "none",
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <Button onClick={() => signOut()} type="primary" danger>
              Logout
            </Button>
          </items>
        ) : (
          <Link
            style={{
              textDecoration: "none",
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
            href="/login"
          >
            <items>LOGIN</items>
          </Link>
        )}
      </Menu>
    </Header>
  );
};
export default Navbar;
