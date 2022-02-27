import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import BusesTable from './components/BusesTable.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import SideBar from './components/SideBar.js';
import SkeletonScreen from './components/SkeletonUIs/SkeletonScreen.js';
import Account from './pages/Account.js';
import ComingSoon from './pages/ComingSoon.js';
import DashRoutes from './pages/DashboardRouter.js';
import LandingPage from './pages/LandingPage.js';
import Login from './pages/Login.js';
import TrackingPage from './pages/TrackingPage.js';
import PublicProfile from './pages/profiles/PublicProfile.js';
import RegisterBus from './pages/RegisterBus.js';
import DriverProfile from './profiles/DriverProfile.js';
import OperatorProfile from './profiles/OperatorProfile.js';
import { store } from './redux/store.js';
import { useLoader } from './useLoader.js';

function MainRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="account" element={<Account />} />
        <Route path="sidebar" element={<SideBar />} />
        <Route path="OperatorProfile" element={<OperatorProfile />} />
        <Route path="DriverProfile" element={<DriverProfile />} />
        <Route path="track" element={<ComingSoon title="Track" />} />
        <Route path="bus_register" element={<RegisterBus />} />
        <Route path="buses_table" element={<BusesTable />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const { loading } = useLoader();

  return (
    <div className="App min-h-screen h-full">
      {loading && <SkeletonScreen />}
      {!loading && (
        <div>
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
<<<<<<< HEAD
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard/*" element={<DashboardRoute />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tracking-page" element={<TrackingPage />} />
                <Route path="/public-profile" element={<PublicProfile />} />
                <Route path="/account" element={<Account />} />
=======
                <Route exact={false} path="/" element={<MainRoutes />} />
>>>>>>> 3737ce0 (Add the click outside functionality)
                <Route
                  exact={false}
                  path="/dashboard/*"
                  element={<DashRoutes />}
                />
                <Route path="/accounts/*" />
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
