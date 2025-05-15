import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trainer } from "../../types/Trainer";

interface TrainerState {
    trainers: Trainer[];
}

const initialState: TrainerState = {
    trainers: [],
};

const trainerSlice = createSlice({
    name: "trainer",
    initialState,
    reducers: {
        addTrainer: (state, action: PayloadAction<Trainer>) => {
            state.trainers.push(action.payload);
        },
        removeTrainer: (state, action: PayloadAction<number>) => {
            state.trainers = state.trainers.filter(
                (trainer) => trainer.id !== action.payload
            );
        },
    },
});

export const { addTrainer, removeTrainer } = trainerSlice.actions;
export default trainerSlice.reducer;
