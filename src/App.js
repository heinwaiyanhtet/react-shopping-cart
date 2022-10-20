import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/products';
import Cost from './pages/Cost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/cost' element={ <Cost/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
