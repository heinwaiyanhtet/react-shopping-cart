import React, { useContext } from "react";
import EachProduct from "../components/EachProduct"
import { AppContextProvider } from "../context/AppContext";

function App() {
  const {isLoading,isSuccess} = useContext(AppContextProvider)
  return (
    <>
      {isLoading && <div>Loading ....</div>}
      {isSuccess && (       
           <main className="px-4 md:px-9 lg:px-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <EachProduct/>
          </main>
      )}
    </>
  );
}
export default App;
