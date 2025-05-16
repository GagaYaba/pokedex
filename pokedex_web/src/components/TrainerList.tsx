import { Trainer } from "../types/Trainer";
import { TrainerCard } from "./TrainerCard";

interface Props {
    trainers: Trainer[];
    onSelectTrainer: (trainer: Trainer) => void;
}

export const TrainerList: React.FC<Props> = ({ trainers, onSelectTrainer }) => {
    return (
        <div className="trainer-grid">
            {trainers.map((t) => (
                <TrainerCard
                    key={t.id}
                    trainer={t}
                    onSelect={onSelectTrainer}
                />
            ))}
        </div>
    );
};
