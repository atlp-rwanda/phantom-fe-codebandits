import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import SkeletonScreen from './components/SkeletonUIs/SkeletonScreen.js';
import MainRoutes from './containers/MainRoutes.js';
import DashRoutes from './containers/DashboardRouter.js';
import { store } from './redux/store.js';
import { useLoader } from './useLoader.js';
import PrivateRoute from './utils/PrivateRoute.js';

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
