// hook to provide product list
import { useEffect, useState } from "react";
import { getAllProducts, getProductbyID } from "@/utils/api";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(`[get products error]`, error));
  }, []);

  return { products };
}

// hook to obtain product information

export function useProduct(id) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductbyID(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error("[get product error]", error));
  }, [id]);

  return { product };
}
