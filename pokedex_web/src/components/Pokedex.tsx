import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetPokemonQuery } from "../api/pokemonApi";
import { addTrainerId } from "../store/slices/pokemonSlice";

interface Props {
    trainerId: string;
    caughtPokemons: number[];
}

const MAX_POKEMON_ID = 1010;

export const Pokedex: React.FC<Props> = ({ trainerId, caughtPokemons }) => {
    const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(null);
    const dispatch = useDispatch();

    const selectedQuery = useGetPokemonQuery(selectedPokemonId ?? -1, {
        skip: selectedPokemonId === null,
    });

    const selectedPokemon = selectedQuery.data;
    const isLoadingSelected = selectedQuery.isLoading;

    const handleCapture = () => {
        let randomId: number;

        do {
            randomId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;
        } while (caughtPokemons.includes(randomId));

        setSelectedPokemonId(randomId);
        dispatch(addTrainerId(randomId));
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Pokédex de {trainerId}</h2>

            <button onClick={handleCapture}>Un Pokémon sauvage apparaît</button>

            {caughtPokemons.length === 0 ? (
                <p>Aucun Pokémon capturé pour ce dresseur.</p>
            ) : (
                <div className="pokedex-grid">
                    {caughtPokemons.map((id) => {
                        const { data, isLoading, error } = useGetPokemonQuery(id);
                        return (
                            <div
                                key={id}
                                className="pokemon-card"
                                onClick={() => data && setSelectedPokemonId(id)}
                            >
                                {isLoading && <span>Chargement...</span>}
                                {error && <span>Erreur</span>}
                                {data && (null)}
                            </div>
                        );
                    })}
                </div>
            )}

            {selectedPokemonId && isLoadingSelected}

            {selectedPokemon && (
                <div className="pokemon-details">
                    <div className="details-image">
                        <img
                            src={selectedPokemon.sprites?.regular}
                            alt={selectedPokemon.name.fr}
                        />
                    </div>
                    <div className="details-info">
                        <h3>{selectedPokemon.name.fr}</h3>
                        <p><strong>Catégorie:</strong> {selectedPokemon.category}</p>
                        <p>
                            <strong>Types:</strong>{" "}
                            {Array.isArray(selectedPokemon.types)
                                ? selectedPokemon.types.map((type: any) => type.name).join(", ")
                                : "Inconnu"}
                        </p>
                        <div>
                            {Array.isArray(selectedPokemon.types) &&
                                selectedPokemon.types.map((type: any, index: number) => (
                                    <img key={index} src={type.image} alt={type.name} width={30} />
                                ))}
                        </div>
                        <p>
                            <strong>Talents:</strong>{" "}
                            {Array.isArray(selectedPokemon.talents)
                                ? selectedPokemon.talents.map((talent: any) => talent.name).join(", ")
                                : "Aucun"}
                        </p>

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
                        <p>
                            <strong>Groupes d'œufs:</strong>{" "}
                            {Array.isArray(selectedPokemon.egg_groups)
                                ? selectedPokemon.egg_groups.join(", ")
                                : "Inconnu"}
                        </p>
                        <p>
                            <strong>Sexe:</strong>{" "}
                            {selectedPokemon.sexe && selectedPokemon.sexe.male != null && selectedPokemon.sexe.female != null
                                ? `Mâle: ${selectedPokemon.sexe.male}%, Femelle: ${selectedPokemon.sexe.female}%`
                                : "Inconnu"}
                        </p>
                        <p><strong>Catch Rate:</strong> {selectedPokemon.catch_rate}</p>
                        <p><strong>Niveau 100:</strong> {selectedPokemon.level_100}</p>
                        <h4>Évolution:</h4>
                        {Array.isArray(selectedPokemon.evolution?.next) && selectedPokemon.evolution.next.length > 0 ? (
                            <ul>
                                {selectedPokemon.evolution.next.map((evo: any) => (
                                    <li key={evo.pokedex_id}>
                                        {evo.name} (Condition: {evo.condition})
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Aucune évolution.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
