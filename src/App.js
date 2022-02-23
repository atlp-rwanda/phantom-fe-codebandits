import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Account from './pages/Account.js';
import LandingPage from './pages/LandingPage.js';
import Login from './pages/Login.js';
import { store } from './redux/store.js';
import {
  RegisterDriverPage,
  RegisterOperatorPage
} from './pages/RegisterPages.js';

function App() {
  const { loading } = useLoader();

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/register-operator" element={<RegisterOperatorPage />} />
           <Route path="/register-driver" element={<RegisterDriverPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
