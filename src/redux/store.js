import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authReducer.js';
import { counterReducer } from './reducers/counterReducer.js';
import { updateProfileReducer } from './reducers/updateProfileReducer.js';
import { profileReducer } from './reducers/profileReducer.js';
import { managementReducer } from './reducers/managementReducer.js';
import { dashboardReducer } from './reducers/dashboardReducer.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profileUpdates: updateProfileReducer,
    profileInfo: profileReducer,
    auth: authReducer,
    management: managementReducer,
    dashboard: dashboardReducer
  }
});
