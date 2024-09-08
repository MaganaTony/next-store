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
    if (!id) return; // if id is not defined, return empty object to avoid empty page due to undefined product(404)
    getProductbyID(id)
    .then((data) => setProduct(data))
    .catch((error) => console.error("[useProduct]", error));
  }, [id]);
  
  return { product };
}
