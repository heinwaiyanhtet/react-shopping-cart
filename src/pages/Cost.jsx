import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { AppContextProvider } from '../context/AppContext';
import { useContext, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
//import { useRef } from 'react';

const Cost = () => {
  const {productList} = useContext(AppContextProvider);

  const [totalCost,setTotalCost] = useState(0);
  //const costRef = useRef();
  const inputProps = {
    min:1,
  }

  const costItemPerCount = (itemCount,itemPrice,itemId) => {
    const costItemPerPrice = document.getElementById(itemId);
    const costPerPrice = itemCount * itemPrice;
    costItemPerPrice.innerHTML = costPerPrice;
  } 
  
  useEffect(() => {
    return () => {
      const costItemPerPrice = document.querySelectorAll(".costItemPerPrice");
      const PriceArray = [];
      [...costItemPerPrice].forEach((eachPrice) => {
        PriceArray.push(eachPrice.innerHTML);
      })
      const total = PriceArray.reduce((accumulator,current)=>accumulator+Number(current),0)
      setTotalCost(total);
    };
  },[]);

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
                  <p className="text-blue-500 font-black" 
                     >Cost : <span id={costItem.id} className="costItemPerPrice">{costItem.price} </span> 
                  </p>
                </div>
                <div>
                    <div className='flex flex-row'>
                      <Button variant="contained" className="grow">
                        <span className='text-xl'>+</span>
                      </Button>
                      <Input type='number' fullWidth={false} className='mx-2 grow' defaultValue={1}
                            inputProps={inputProps}
                            onChange={(e)=>{
                               costItemPerCount(e.target.value,costItem.price,costItem.id);
                            }}
                      />
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
            <h1 className='mb-6 text-4xl sm:w-screen md:w-9/12 lg:w-6/12 mx-auto'>There was no card that you added.</h1>
          )
      }
      <div className="mb-6 sm:w-screen md:w-9/12 lg:w-6/12 mx-auto">
        <Divider/>
        <div className='flex justify-between mt-6'>
            <h1 className='mb-0 text-4xl'> Total Cost: {totalCost}</h1>
            <Button variant="contained">
                <span className=''>Check out </span>
            </Button>
        </div>
      </div>
    </>
  );
};
export default Cost;