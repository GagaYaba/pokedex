import { Trainer } from "../types/Trainer";

interface Props {
    trainer: Trainer;
    onSelect: (trainer: Trainer) => void;
}

export const TrainerCard: React.FC<Props> = ({ trainer, onSelect }) => {
    return (
        <div className="trainer-card" onClick={() => onSelect(trainer)}>
            <img src={trainer.avatar} alt={trainer.name} className="trainer-avatar" />
            <h2>{trainer.name}</h2>
            <p>Âge : {trainer.age}</p>
            <p>Région : {trainer.region}</p>
            <p>Starter : {trainer.starter.name} ({trainer.starter.type})</p>
        </div>
    );
};
