
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Start from './Components/Start/Start';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';

function App() {
  const router = createHashRouter([{path:"",element:<Layout/>,children:[
    {path:'',element:<Start/>},
    {path:'start',element:<Start/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<Notfound/>}
  ]}])
  return (
    < >
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
