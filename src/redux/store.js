import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterSlice, contactsReducer } from './slice';

const rootRedusers = combineReducers({
  contacts: contactsReducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootRedusers,
});
