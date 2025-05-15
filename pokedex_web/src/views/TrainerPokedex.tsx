import { useParams, useNavigate } from 'react-router-dom';
import { trainers } from '../datas/trainers';
import { Pokedex } from '../components/Pokedex';
import NotFound from '../components/NotFound';

export const TrainerPokedex = () => {
    const { trainerId } = useParams();
    const navigate = useNavigate();
    const trainer = trainers.find((t) => t.name === trainerId);

    if (!trainer) return <NotFound />;

    return (
        <div>
            <Pokedex
                trainerId={trainer.name}
                caughtPokemons={trainer.caughtPokemons}
                onBack={() => navigate(-1)}
            />
        </div>
    );
};
