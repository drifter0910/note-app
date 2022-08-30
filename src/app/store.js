import { configureStore, combineReducers } from '@reduxjs/toolkit';
import noteSlice from '../features/note/noteSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  note: noteSlice,
});
const persistConfig = {
  key: 'noteState',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
