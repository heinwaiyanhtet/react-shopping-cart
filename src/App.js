import './App.css';
import AppContext from './context/AppContext';
import Router from './route/Router';

function App() {
  return (
      <AppContext>
        <Router/>
      </AppContext>
   
  );
}

export default App;
