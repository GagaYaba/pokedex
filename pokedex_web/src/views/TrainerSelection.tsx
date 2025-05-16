import { useNavigate } from "react-router-dom";
import { trainers as initialTrainers } from "../datas/trainers";
import { Trainer } from "../types/Trainer";
import { TrainerList } from "../components/TrainerList";

import "../styles/cards.css";

export const TrainerSelection = () => {
    const navigate = useNavigate();
    const allTrainers = [...initialTrainers];

    const handleSelectTrainer = (trainer: Trainer) => {
        navigate(`/trainer/${encodeURIComponent(trainer.name)}`);
    };

    return (
        <div>
            <h1>Choisis ton dresseur Pokémon</h1>
            <TrainerList
                trainers={allTrainers}
                onSelectTrainer={handleSelectTrainer}
            />
        </div>
    );
};