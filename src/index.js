import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Region from './components/page/region';
import StarWars from './components/page/starwars';
import { Provider } from 'react-redux';
import store from './app/store';
import Regionpage from './components/page/region';
import Layout from './components/template/layout';
import Home from './components/template/home';
import Employee from './components/template/employee';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Region />
  //   {/* <StarWars/> */}
  // </React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="region" element={<Regionpage />} />
            <Route path="employee" element={<Employee />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    {/* <Regionpage/> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
