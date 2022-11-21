import { createContext, useState } from "react";
export const AppContextProvider = createContext();

const AppContext = ({children}) => {
    const [productList,setProductList] = useState([]);
    return(
        <AppContextProvider.Provider value={{
            productList,
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