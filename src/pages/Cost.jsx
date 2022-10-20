import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const Cost = () => {
    return (
        <>
          <div className="sm:w-screen md:w-9/12 lg:w-6/12 mx-auto p-4 border-2 rounded-lg border-blue-500 flex justify-between">
            <div>
              <p className="font-light">Unit Pirce</p>
              <p className="font-black mb-2">title</p>
              <p className="text-blue-500 font-black">Cost : </p>
            </div>
            <div>
              <div>
                <Button variant="contained" className="">
                  <span className='text-xl'>+</span>
                </Button>
                <Input fullWidth={false} className='mx-2 w-6/12'/>
                <Button variant='contained' className="">
                  <span className='text-xl'>-</span>
                </Button>
              </div>
              <div className='mt-2'>
                <Button variant="contained" className="w-11/12">
                  <span className=''>Added</span>
                </Button>
              </div>
            </div>
          </div>
        </>
    );
  };
export default Cost;