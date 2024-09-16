// hook to provide product list
import { useEffect, useState } from "react";
import { getAllProducts, getProductbyID } from "@/utils/api";
import { useRouter } from "next/router";

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

export function useAuth(){
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");

    if (!localStorageToken) router.push("/login");
    

    setToken(localStorageToken);
  }, []);

  return { token };
}

// export function useAuth( {notRedirect = false, RedirectTo = '/login} ){
//   const [token, setToken] = useState("");
//   const router = useRouter();

//   useEffect(() => {
//     const localStorageToken = localStorage.getItem("token");

//     if (!localStorageToken && notRedirect === false) router.push(RedirectTo);
    

//     setToken(localStorageToken);
//   }, []);

//   return { token };
// }