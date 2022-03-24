import Footer from '@components/Footer.js';
import Header from '@components/Header.js';
import AccountRouter from '@pages/accounts/AccountRouter.js';
import LandingPage from '@pages/LandingPage.js';
import Login from '@pages/Login.js';
import PublicProfile from '@pages/profiles/PublicProfile.js';
import TrackingPage from '@pages/TrackingPage.js';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
function MainRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="/tracking-page" element={<TrackingPage />} />
        <Route path="/public-profile" element={<PublicProfile />} />
        <Route path="/accounts/*" element={<AccountRouter />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainRoutes;
