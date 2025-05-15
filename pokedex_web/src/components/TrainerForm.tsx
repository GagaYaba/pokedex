import { useState } from "react";
import { Trainer } from "../types/Trainer";
import { pokemons } from "../datas/pokemons";

interface Props {
    onSubmit: (trainer: Trainer) => void;
}

export const TrainerForm: React.FC<Props> = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(10);
    const [region, setRegion] = useState("");
    const [avatar, setAvatar] = useState("/assets/trainers/ash.png");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const starters = pokemons.filter(p => p.sprites?.regular);
        const starter = starters[Math.floor(Math.random() * starters.length)];

        const newTrainer: Trainer = {
            id: Date.now(),
            name,
            age,
            region,
            starter: {
                name: starter.name.fr,
            },
            avatar: avatar,
            caughtPokemons: [],
        };

        onSubmit(newTrainer);

        setName("");
        setAge(10);
        setRegion("");
        setAvatar("/assets/trainers/ash.png");
    };

    return (
        <form onSubmit={handleSubmit} className="trainer-form">
            <h2>Ajouter un nouveau dresseur</h2>
            <label>Avatar :</label>
            <select value={avatar} onChange={(e) => setAvatar(e.target.value)} required>
                <option value="/assets/pierre.png">Pierre</option>
                <option value="/assets/ondine.png">Ondine</option>
                <option value="/assets/major_bob.png">Major Bob</option>
                <option value="/assets/erika.png">Erika</option>
            </select>
            <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Âge"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                required
            />
            <input
                type="text"
                placeholder="Région"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                required
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};
