import { configureStore } from "@reduxjs/toolkit";
import trainerReducer from "./slices/trainerSlice";
import pokemonReducer from "./slices/pokemonSlice";

const store = configureStore({
    reducer: {
        trainer: trainerReducer,
        pokemons: pokemonReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;