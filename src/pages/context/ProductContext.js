import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const removeProduct = (productId) => {
    setSelectedProducts(
      selectedProducts.filter((product) => product._id !== productId)
    );
  };

  const clearProducts = () => {
    setSelectedProducts([]);
  };

  return (
    <ProductContext.Provider
      value={{ selectedProducts, addProduct, removeProduct, clearProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
