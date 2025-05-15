import { Trainer } from "../types/Trainer";
import { TrainerCard } from "./TrainerCard";

interface Props {
    trainers: Trainer[];
    onSelectTrainer: (trainer: Trainer) => void;
    onDeleteTrainer?: (id: number) => void;
}

export const TrainerList: React.FC<Props> = ({ trainers, onSelectTrainer, onDeleteTrainer }) => {
    return (
        <div className="trainer-grid">
            {trainers.map((t) => (
                <TrainerCard
                    key={t.id}
                    trainer={t}
                    onSelect={onSelectTrainer}
                    onDelete={onDeleteTrainer ? () => onDeleteTrainer(t.id) : undefined}
                />
            ))}
        </div>
    );
};
