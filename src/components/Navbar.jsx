import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext } from "react";
import MenuItem from '@mui/material/MenuItem';
import { AppContextProvider } from "../context/AppContext";
import SearchProduct from "./SearchProduct";

const Navbar = _ => {
  const {products , isSuccess , category , setCategory} = useContext(AppContextProvider);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };  
  
  const categoryGet = _ => {
      const arrayCategory = [];
      products.map(el => {
        arrayCategory.push(el.category)
      });
      const uniqueCategory = [...new Set(arrayCategory)];
      return uniqueCategory;
  }
  return (
  <>
    <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mb-6">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
             <div className="flex md:order-2">
                <div>
                    <FormControl sx={{  mx: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">Category</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={category}
                        label="Category"
                        onChange={handleChange}
                      >
                        <MenuItem value="allCategory">
                          <em>all category</em>
                        </MenuItem>
                        {
                          isSuccess &&  ( 
                              categoryGet().map(category => 
                                  <MenuItem key={category} value={category}>{category}</MenuItem>
                              )
                          ) 
                        }
                      </Select>
                    </FormControl>
                </div>
                <SearchProduct />
              </div>
              
              <div
                className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="navbar-search"
              >
                <div className="relative mt-3 md:hidden">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                  />
                </div>
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cost"
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Cost
                    </Link>
                  </li>
                </ul>
              </div>
          </div>
    </nav>
  </>
  );
};
export default Navbar;
