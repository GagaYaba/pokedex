import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
    capturedPokemonIds: number[];
}

const initialState: PokemonState = {
    capturedPokemonIds: [],
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        addTrainerId: (state, action: PayloadAction<number>) => {
            if (!state.capturedPokemonIds.includes(action.payload)) {
                state.capturedPokemonIds.push(action.payload);
            }
        },
        removeTrainerId: (state, action: PayloadAction<number>) => {
            state.capturedPokemonIds = state.capturedPokemonIds.filter(
                (id) => id !== action.payload
            );
        },
    },
});

export const { addTrainerId, removeTrainerId } = pokemonSlice.actions;
export default pokemonSlice.reducer;
