import { useEffect, useState } from "react";
import { pokemons } from "../datas/pokemons";

interface Pokemon {
    pokedex_id: number;
    name: { fr: string; en: string; jp: string };
    sprites: { regular: string; shiny: string };
    types: { name: string; image: string }[];
}

interface Props {
    trainerId: string;
    caughtPokemons: number[];
    onBack: () => void;
}

export const Pokedex: React.FC<Props> = ({ trainerId, caughtPokemons, onBack }) => {
    const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const pokemonsCaptured = caughtPokemons
            .map((id) => pokemons.find((pokemon) => pokemon.pokedex_id === id))
            .filter((pokemon) => pokemon !== undefined) as Pokemon[];
        setSelectedPokemons(pokemonsCaptured);
    }, [caughtPokemons]);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Pokédex de {trainerId}</h2>
            <button onClick={onBack}>Retour à la sélection</button>

            {selectedPokemons.length === 0 ? (
                <p>Aucun Pokémon capturé pour ce dresseur.</p>
            ) : (
                <div className="pokedex-grid">
                    {selectedPokemons.map((pokemon) => (
                        <div key={pokemon.pokedex_id} className="pokemon-card">
                            <img
                                src={pokemon.sprites.regular}
                                alt={pokemon.name.fr}
                                className="pokemon-avatar"
                            />
                            <h3>{pokemon.name.fr}</h3>
                            <div>
                                {pokemon.types.map((type, index) => (
                                    <img key={index} src={type.image} alt={type.name} width={30} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
