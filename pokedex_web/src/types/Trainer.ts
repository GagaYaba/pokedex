export interface Trainer {
    id: number;
    name: string;
    age: number;
    region: string;
    starter: {
        name: string;
    };
    avatar: string;
    caughtPokemons: number[];
}