import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducers/counterReducer.js';
import { updateProfileReducer } from './reducers/updateProfileReducer.js';
import { profileReducer } from './reducers/profileReducer.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profileUpdates: updateProfileReducer,
    profileInfo: profileReducer
  }
});
