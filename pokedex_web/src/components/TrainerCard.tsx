import { Trainer } from "../types/Trainer";

interface Props {
    trainer: Trainer;
    onSelect: (trainer: Trainer) => void;
    onDelete?: () => void;
}

export const TrainerCard: React.FC<Props> = ({ trainer, onSelect, onDelete }) => {
    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete?.();
    };

    return (
        <div className="trainer-card" onClick={() => onSelect(trainer)}>
            <img src={trainer.avatar} alt={trainer.name} className="trainer-avatar" />
            <h2>{trainer.name}</h2>
            <p>Âge : {trainer.age}</p>
            <p>Région : {trainer.region}</p>
            <p>Starter : {trainer.starter.name}</p>
            {onDelete && (
                <div>
                    <button onClick={handleDeleteClick}>🗑️ Supprimer</button>
                </div>
            )}
        </div>
    );
};
