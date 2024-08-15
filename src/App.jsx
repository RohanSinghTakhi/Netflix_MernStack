import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Browse from './Components/browse';
import {Toaster} from 'react-hot-toast'; 
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />, 
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={approuter} />
      <Toaster/>
    </>
  );
}

export default App;
