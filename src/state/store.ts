import { configureStore } from '@reduxjs/toolkit';
import { api } from './api'; // Asegúrate de ajustar la ruta de importación al archivo correcto

const store = configureStore({
  reducer: {
    // Tus otros reducers
    api: api.reducer, // Reducer de tu RTK Query API
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Agregar el middleware de tu RTK Query API
});

export default store;
