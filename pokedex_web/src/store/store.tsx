import { configureStore } from "@reduxjs/toolkit";
// import trainerReducer from "./slices/trainerSlice";
import pokemonReducer from "./slices/pokemonSlice";

import { pokemonApi } from "../api/pokemonApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        // trainer: trainerReducer,
        pokemons: pokemonReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;