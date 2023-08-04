import { Button, Dropdown, Menu } from "antd";
import { CaretDownFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Link from "next/link";

const boldIconStyle = {
  strokeWidth: "2",
};
const DropdownCategory = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    if (menuVisible && menuData.length === 0) {
      fetchData();
    }
  }, [menuVisible, menuData]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/products");
      const data = await response.json();
      const products = data.map((d) => d.products[0]);
      const productCategories = products.map((category) => ({
        key: category._id,
        label: category.category,
      }));
      setMenuData(productCategories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Dropdown
        overlay={
          <Menu>
            {menuData?.map((item) => (
              <Menu.Item key={item.key}>
                <Link href={`/category/${item.label}`}>
                  <p style={{ margin: 0, padding: "0px 3px" }}>{item.label}</p>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        }
        placement="bottomRight"
        arrow
        onVisibleChange={(visible) => {
          setMenuVisible(visible);
          if (visible && menuData.length === 0) {
            fetchData();
          }
        }}
      >
        <Button
          style={{
            border: "none",
            background: "none",
            fontSize: "20px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          CATEGORIES
          <CaretDownFilled style={boldIconStyle} />
        </Button>
      </Dropdown>
      <br />
    </>
  );
};

export default DropdownCategory;
