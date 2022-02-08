import React from 'react';
import { 
    BrowserRouter,
    Routes,
    Route 
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App.js'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>        
    </BrowserRouter>,
  document.getElementById('root')
);
