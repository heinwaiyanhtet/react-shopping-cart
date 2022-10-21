import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import RatingStars from "../components/RatingStars";
import { Button } from "@mui/material";
import useLocalStorage from "../hooks/useLocalStorage";
import { ProductsContext } from "../context/ProductsContext";

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
        <>
          <main className="px-4 md:px-9 lg:px-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                className="border h-[22rem] px-3 relative mt-24"
                key={product.id}
              >
                <div className="flex flex-col">
                  <figure className="w-full text-center">
                    <img
                      className="w-48 h-48 -mt-24 mb-8 block ml-auto mr-auto"
                      src={product.image}
                    />
                  </figure>
                  <p className="text-justify">{product.title}</p>
                </div>
                <div className="absolute w-11/12 bottom-0 text-center">
                  <div className="flex justify-between mb-6">
                    <RatingStars />${product.price}
                  </div>
                  <div className="text-center mb-8 w-full mt-4">
                    <Button
                      id={product.id}
                      variant="outlined"
                      className="w-5/6"
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </>
      )}
    </>
  );
}
export default App;
