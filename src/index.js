import React from 'react';
import { 
    BrowserRouter,
    Routes,
    Route 
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { counterReducer } from './redux/reducers/counterReducer.js'
import App from './App.js'

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>        
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
