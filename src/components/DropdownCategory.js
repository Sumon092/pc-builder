import { Button, Dropdown } from "antd";
import { CaretDownFilled } from "@ant-design/icons";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const boldIconStyle = {
  strokeWidth: "2",
};
const DropdownCategory = () => (
  <>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
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
export default DropdownCategory;
