import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const AppContextProvider = createContext();

const AppContext = ({children}) => {
    const [productList,setProductList] = useState([]);
    const [products, setProducts] = useLocalStorage("products", []);
    const [category,setCategory] = useState('');
    const [search,setSearch] = useState('');
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
    useEffect( _ => {
      return _ => {
        fetchFakeStore().then((response) => {
          setProducts(response);
        });
      };
    }, [fakeStoreProducts]);

    return(
        <AppContextProvider.Provider value={{
            products,
            isLoading,
            isSuccess,
            productList,
            setProductList,
            category,
            setCategory,
            search,
            setSearch,
            addToCost:(product) => {
                const findById = productList.find(eachProduct => 
                    eachProduct.id === product.id
                )
                if(!findById)
                    setProductList([...productList,product]);
            },

        }}>
            {children}
        </AppContextProvider.Provider>
    )
}

export default AppContext;