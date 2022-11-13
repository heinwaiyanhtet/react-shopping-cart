import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { AppContextProvider } from '../context/AppContext';
import { useContext } from 'react';
import { useState } from 'react';
import Divider from '@mui/material/Divider';


const Cost = () => {
  const {productList} = useContext(AppContextProvider); 
  const [costEachItem,setEachItem] = useState("1");  
  return (
    <>
      {  
          productList.length > 0 ? (
            productList.map((costItem) => (
              <div key={costItem.id}
                  className="mb-6 sm:w-screen md:w-9/12 lg:w-6/12 mx-auto p-4 border-2 
                              rounded-lg border-blue-500 grid grid-cols-[2fr_1fr] gap-4
                            "
              >
                <div>
                  <p className="font-black">${costItem.price}</p>
                  <p className="text-gray-400 mb-2">{costItem.title}</p>
                  <p className="text-blue-500 font-black">Cost : </p>
                </div>
                <div>
                    <div className='flex flex-row'>
                      <Button variant="contained" className="grow">
                        <span className='text-xl'>+</span>
                      </Button>
                      <Input fullWidth={false} className='mx-2 grow' value={costEachItem}/>
                      <Button variant='contained' className="grow">
                        <span className='text-xl'>-</span>
                      </Button>
                    </div>
                    <div className='mt-2 text-right'>
                      <Button variant="contained" color="error" className="w-6/12">
                        <span className=''>delete</span>
                      </Button>
                    </div>
                </div>
              </div>
            )) 
          ) : (
            <h1>There is no card that you added.</h1>
          )
      }
      <Divider variant="middle"/>
    </>
  );
};
export default Cost;