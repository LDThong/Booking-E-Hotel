import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MySearchContext } from './context/SearchContext';
// import store from './store/Store';
// import { Provider } from 'react-redux';

import { store } from './store/index';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    {/* <Provider store={store}> */}
    <MySearchContext>
      <App />
    </MySearchContext>
      
    {/* </Provider> */}

    <Provider store={store}>
      <App />
    </Provider>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
