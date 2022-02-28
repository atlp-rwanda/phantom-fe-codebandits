import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import DashboardRoute from './DashboardRoutes.js';
import Account from './pages/Account.js';
import LandingPage from './pages/LandingPage.js';
import Login from './pages/Login.js';
import { store } from './redux/store.js';

function App() {
  const { loading } = useLoader();

  return (
    <div className="min-h-screen flex flex-col">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              exact={false}
              path="/dashboard/*"
              element={<DashboardRoute />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer theme="colored" />
      </Provider>
    </div>
  );
}

export default App;
