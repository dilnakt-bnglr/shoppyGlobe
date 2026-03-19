import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productList } from "./productSlice";

const useFetch = (url) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the API with the url
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.products.length > 0) {
          setProducts(data.products);
          dispatch(productList(data.products));
        }
      })
      .catch((err) => setError(err));
  }, [url]);
  return { products, error };
};

export default useFetch;
