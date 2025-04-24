import { useState } from "react";
import { trainers } from "../datas/trainers";
import { Trainer } from "../types/Trainer";
import { TrainerList } from "../components/TrainerList";
import { Pokedex } from "../components/Pokedex";

import "../styles/trainer-card.css";

export const TrainerSelection = () => {
    const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

    return (
        <div>
            <h1>Choisis ton dresseur Pokémon</h1>
            {selectedTrainer ? (
                <Pokedex
                    trainerId={selectedTrainer.name}
                    caughtPokemons={selectedTrainer.caughtPokemons}
                    onBack={() => setSelectedTrainer(null)}
                />
            ) : (
                <TrainerList trainers={trainers} onSelectTrainer={setSelectedTrainer} />
            )}
        </div>
    );
};
