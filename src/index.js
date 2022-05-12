//REACT SPECIAL
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
//END REACT SPECIAL

import { store } from "./app/store";

//COMPONENTS 
import App from './App';

//END COMPONENTS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);

