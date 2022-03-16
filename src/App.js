import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import SkeletonScreen from './components/SkeletonUIs/SkeletonScreen.js';
import ComingSoon from './pages/ComingSoon.js';
import DashRoutes from './pages/DashboardRouter.js';
import LandingPage from './pages/LandingPage.js';
import Login from './pages/Login.js';
import { store } from './redux/store.js';
import { useLoader } from './useLoader.js';

export function MainRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="track" element={<ComingSoon title="Track" />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}
function App() {
  const { loading } = useLoader();
  return (
    <div>
      {loading && <SkeletonScreen />}
      {!loading && (
        <div className="flex flex-col min-h-screen h-full">
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route
                  exact={false}
                  path="/dashboard/*"
                  element={<DashRoutes />}
                />
                <Route exact={false} path="/*" element={<MainRoutes />} />
              </Routes>
            </BrowserRouter>
            <ToastContainer theme="colored" />
          </Provider>
        </div>
      )}
    </div>
  );
}

export default App;
