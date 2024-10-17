import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import React from 'react';

// Lazy-loaded components
const Home     = React.lazy(()  => import('./Pages/HomePage'));
const Login    = React.lazy(()  => import('./Pages/LogPage'));
const Register = React.lazy(()  => import('./Pages/RegisterPage')); 


function App() {
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/"         element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home"     element={<Home />} />
      </Route>
    )
  );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </React.Suspense>
  );
}

export default App;
