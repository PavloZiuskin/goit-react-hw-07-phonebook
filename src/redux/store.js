import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterSlice, contactsReducer } from './slice';
import storage from 'redux-persist/lib/storage';

const rootRedusers = combineReducers({
  contacts: contactsReducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootRedusers,
});
