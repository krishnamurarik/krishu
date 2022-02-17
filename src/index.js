import ReactDOM from 'react-dom';
import React, { StrictMode } from 'react';
import App from "./App";
import Store from './component/redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
    <StrictMode>
        <Provider store={Store} >
            < App />
        </Provider>
    </StrictMode>
    , document.getElementById("root"))