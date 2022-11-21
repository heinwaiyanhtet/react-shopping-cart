import React, { useContext, useState } from "react";
import RatingStars from "./RatingStars";
import { Button } from "@mui/material";
import { ProductsContext } from "../context/ProductsContext";
import { AppContextProvider } from "../context/AppContext";

export default function Eachproduct() { 
  const { products } = useContext(ProductsContext);
  const { addToCost } = useContext(AppContextProvider);
  return (
    <>
      {products.map((product) => (
        <div className="border h-[22rem] px-3 relative mt-24" key={product.id}>
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
              <RatingStars rating={product.rating.rate} />${product.price}
            </div>
            <div className="text-center mb-8 w-full mt-4">
              <Button
                onClick={() => {
                  addToCost(product);
                }}
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
    </>
  );
}
