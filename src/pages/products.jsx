import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useLocalStorage from "../hooks/useLocalStorage";
import { ProductsContext } from "../context/ProductsContext";
import EachProduct from "../components/EachProduct"

function App() {
  const [products, setProducts] = useLocalStorage("products", []);
  const {
    isLoading,
    isSuccess,
    data: fakeStoreProducts,
  } = useQuery(["fakeStoreProducts"], fetchFakeStore);

  function fetchFakeStore() {
    return fetch(`https://fakestoreapi.com/products/`).then((response) =>
      response.json()
    );
  }
  useEffect(() => {
    return () => {
      fetchFakeStore().then((response) => {
        setProducts(response);
      });
    };
  }, [fakeStoreProducts]);

  return (
    <>
      {isLoading && <div>Loading ....</div>}
      {isSuccess && (
        <ProductsContext.Provider
          value={{
              products,
              setProducts,
          }}
        >
           <main className="px-4 md:px-9 lg:px-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <EachProduct/>
          </main>
        </ProductsContext.Provider>
      )}
    </>
  );
}
export default App;
