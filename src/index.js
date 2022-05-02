import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot }  from "react-dom/client"
// import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './ReactRouting-2/context/AuthContext';
import { Provider } from 'react-redux';
// p2
// import { store } from './redux-3/todo/store';

// p3
// import { store } from './redux-3/p-3/store/store';

// redux4
// import { store } from './redux-4/store';
// server
import { store } from './redux-4/Server/store/store';

const container = document.getElementById("root")
const root = createRoot(container)

// ReactDOM.render
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <AuthProvider> */}
    <Provider store={store}>
    <App />
    </Provider>
    {/* </AuthProvider> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

