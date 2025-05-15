import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';

import { trainers as initialTrainers } from "../datas/trainers";
import { Trainer } from "../types/Trainer";
import { TrainerList } from "../components/TrainerList";
import { TrainerForm } from "../components/TrainerForm";

import { RootState } from "../store/store";
import { addTrainer, removeTrainer } from "../store/slices/trainerSlice";

import "../styles/cards.css";

export const TrainerSelection = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [showForm, setShowForm] = useState(false);

    const reduxTrainers = useAppSelector((state: RootState) => state.trainer.trainers);
    const allTrainers = [...initialTrainers, ...reduxTrainers];

    const handleSelectTrainer = (trainer: Trainer) => {
        navigate(`/trainer/${encodeURIComponent(trainer.name)}`);
    };

    const handleAddTrainer = (trainer: Trainer) => {
        dispatch(addTrainer(trainer));
        setShowForm(false);
    };

    const handleDeleteTrainer = (id: number) => {
        dispatch(removeTrainer(id));
    };

    return (
        <div>
            <h1>Choisis ton dresseur Pokémon</h1>

            <div className="center-button">
                <button onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Annuler" : "➕ Ajouter un dresseur"}
                </button>
            </div>

            {showForm && <TrainerForm onSubmit={handleAddTrainer} />}

            <TrainerList
                trainers={allTrainers}
                onSelectTrainer={handleSelectTrainer}
                onDeleteTrainer={handleDeleteTrainer}
            />
        </div>
    );
};
