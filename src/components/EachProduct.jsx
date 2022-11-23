import React, { useContext } from "react";
import RatingStars from "./RatingStars";
import { Button } from "@mui/material";
import { AppContextProvider } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Eachproduct() {
  const { 
          addToCost,
          productList,
          products , 
          category,
          search
        } = useContext(AppContextProvider);

  const navigate = useNavigate();

  const checkProductId = productId => 
      productList.find(productDetail => productDetail.id === productId);
  
  const goProductDetail = navigationId => 
          navigate("/products/"+navigationId)

  const searchProducts = _ => {
      const finalSearch = Object.assign([],products); 

      //when there are no category and no search
      if(category === "allCategory" || category === ""){
          if(search === '')
            return finalSearch;
      }

      //when there are categories and searches
      if(category && search !== ''){
        let searchByCategory = finalSearch.filter(product => product.category === category);
         return searchByCategory.filter((product) => {
            if(
                product.title.toLowerCase().indexOf(search) > -1 ||
                product.description.toLowerCase().indexOf(search) > -1 ||
                product.price == search
              ) 
                return product
          })
      }

      // when there is only category
      if(category && search == ''){
          return finalSearch.filter(product => product.category === category)
      }

      //when there is only search
      if(search.trim().length > 0 && !category)
      {
        return finalSearch.filter( product => {
            if(
              product.title.toLowerCase().indexOf(search) > -1 ||
              product.description.toLowerCase().indexOf(search) > -1 ||
              product.price == search
              ) return product;
        })
      }
  }

  useEffect(()=>{
     searchProducts(); 
  },[])

  return (
    <>
      {
        searchProducts().length > 1 ?  (
          searchProducts().map( product => (
            <div onClick={ _ => {
              goProductDetail(product.id)
              }} 
              className="border h-[22rem] px-3 relative mt-24" key={product.id}>
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
                    onClick={(event) => {
                      event.stopPropagation();
                      addToCost(product)
                    }}
                    variant = {
                        !checkProductId(product.id) ? "outlined" : "contained"
                    }
                    className="w-5/6"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
            ))
        ) : (
            <h1 className='mb-6 text-4xl sm:w-screen mx-auto'>There was no product that you searched.</h1>
        )
        

      }
    </>
  );
}
