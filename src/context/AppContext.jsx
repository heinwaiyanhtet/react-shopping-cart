import { createContext, useState } from "react";
export const AppContextProvider = createContext();

const AppContext = ({children}) => {
    const [productList,setProductList] = useState([]);
    return(
        <AppContextProvider.Provider value={{
            productList,
            addToCost:(product) => {
                setProductList([...productList,product]);
            }
        }}>
            {children}
        </AppContextProvider.Provider>
    )
}

export default AppContext;