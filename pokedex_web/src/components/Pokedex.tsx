import { useState, useEffect } from "react";
import { pokemons } from "../datas/pokemons";

interface Pokemon {
    pokedex_id: number;
    name: { fr: string; en: string; jp: string };
    sprites: { regular: string; shiny: string };
    types: { name: string; image: string }[];

    category: string;
    talents: { name: string; tc: boolean }[];
    stats: { hp: number; atk: number; def: number; spe_atk: number; spe_def: number; vit: number };
    resistances: { name: string; multiplier: number }[];
    evolution: { pre: null | any; next: { pokedex_id: number; name: string; condition: string }[]; mega: null | any };
    height: string;
    weight: string;
    egg_groups: string[];
    sexe: { male: number; female: number };
    catch_rate: number;
    level_100: number;
}

interface Props {
    trainerId: string;
    caughtPokemons: number[];
    onBack: () => void;
}

export const Pokedex: React.FC<Props> = ({ trainerId, caughtPokemons, onBack }) => {
    const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);  // État pour Pokémon sélectionné

    useEffect(() => {
        const pokemonsCaptured = caughtPokemons
            .map((id) => pokemons.find((pokemon) => pokemon.pokedex_id === id))
            .filter((pokemon) => pokemon !== undefined) as Pokemon[];
        setSelectedPokemons(pokemonsCaptured);
    }, [caughtPokemons]);

    const handlePokemonClick = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Pokédex de {trainerId}</h2>
            <button onClick={onBack}>Retour à la sélection</button>

            {selectedPokemons.length === 0 ? (
                <p>Aucun Pokémon capturé pour ce dresseur.</p>
            ) : (
                <div className="pokedex-grid">
                    {selectedPokemons.map((pokemon) => (
                        <div
                            key={pokemon.pokedex_id}
                            className="pokemon-card"
                            onClick={() => handlePokemonClick(pokemon)}
                        >
                        </div>
                    ))}
                </div>
            )}

            {selectedPokemon && (
                <div className="pokemon-details">
                    <div className="details-image">
                        <img
                            src={selectedPokemon.sprites.regular}
                            alt={selectedPokemon.name.fr}
                        />
                    </div>
                    <div className="details-info">
                        <h3>{selectedPokemon.name.fr}</h3>
                        <p><strong>Catégorie:</strong> {selectedPokemon.category}</p>
                        <p><strong>Types:</strong> {selectedPokemon.types.map(type => type.name).join(", ")}</p>
                        <div>
                            {selectedPokemon.types.map((type, index) => (
                                <img key={index} src={type.image} alt={type.name} width={30} />
                            ))}
                        </div>
                        <p><strong>Talents:</strong> {selectedPokemon.talents.map(talent => talent.name).join(", ")}</p>
                        <p><strong>Statistiques:</strong></p>
                        <ul>
                            <li>HP: {selectedPokemon.stats.hp}</li>
                            <li>Attaque: {selectedPokemon.stats.atk}</li>
                            <li>Défense: {selectedPokemon.stats.def}</li>
                            <li>Attaque Spéciale: {selectedPokemon.stats.spe_atk}</li>
                            <li>Défense Spéciale: {selectedPokemon.stats.spe_def}</li>
                            <li>Vitesse: {selectedPokemon.stats.vit}</li>
                        </ul>
                        <p><strong>Hauteur:</strong> {selectedPokemon.height}</p>
                        <p><strong>Poids:</strong> {selectedPokemon.weight}</p>
                        <p><strong>Groupes d'œufs:</strong> {selectedPokemon.egg_groups.join(", ")}</p>
                        <p><strong>Sexe:</strong> {`Mâle: ${selectedPokemon.sexe.male}%, Femelle: ${selectedPokemon.sexe.female}%`}</p>
                        <p><strong>Catch Rate:</strong> {selectedPokemon.catch_rate}</p>
                        <p><strong>Niveau 100:</strong> {selectedPokemon.level_100}</p>

                        <h4>Évolution:</h4>
                        <ul>
                            {selectedPokemon.evolution.next.map((evo) => (
                                <li key={evo.pokedex_id}>
                                    {evo.name} (Condition: {evo.condition})
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};
