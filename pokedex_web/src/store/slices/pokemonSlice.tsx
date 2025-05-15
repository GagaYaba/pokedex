import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
    capturedPokemonIds: number[];
}

const initialState: PokemonState = {
    capturedPokemonIds: [],
};

const trainerSlice = createSlice({
    name: "trainer",
    initialState,
    reducers: {
        addTrainerId: (state, action: PayloadAction<number>) => {
            state.capturedPokemonIds.push(action.payload);
        },
        removeTrainerId: (state, action: PayloadAction<number>) => {
            state.capturedPokemonIds = state.capturedPokemonIds.filter(
                (id) => id !== action.payload
            );
        },
    },
});

export const { addTrainerId, removeTrainerId } = trainerSlice.actions;
export default trainerSlice.reducer;