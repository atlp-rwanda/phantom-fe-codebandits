import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ComingSoon from './pages/ComingSoon.js';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import SkeletonScreen from './components/SkeletonUIs/SkeletonScreen.js';
import PrivateRoute from './utils/PrivateRoute.js';
import DashRoutes from './pages/DashboardRouter.js';
import LandingPage from './pages/LandingPage.js';
import Login from './pages/Login.js';
import TrackingPage from './pages/TrackingPage.js';
import PublicProfile from './pages/profiles/PublicProfile.js';
import { store } from './redux/store.js';
import { useLoader } from './useLoader.js';
import RegisterRoute from './pages/routes/RegisterRoute.js';
import RouteTable from './pages/routes/components/RouteTable.js';
// import DashRoutes from './containers/DashboardRouter.js';
// import MainRoutes from './containers/MainRoutes.js';

function MainRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="track" element={<ComingSoon title="Track" />} />
        <Route path="route" element={<RegisterRoute />} />
        <Route path="RouteTable" element={<RouteTable />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const { loading } = useLoader();
  return (
    <div className="min-h-screen flex flex-col">
      {loading && <SkeletonScreen />}
      {!loading && (
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route
                exact={false}
                path="/dashboard/*"
                element={
                  <PrivateRoute>
                    <DashRoutes />
                  </PrivateRoute>
                }
              />

              <Route exact={false} path="/*" element={<MainRoutes />} />
            </Routes>
          </BrowserRouter>
          <ToastContainer theme="colored" />
        </Provider>
      )}
    </div>
  );
}

export default App;
