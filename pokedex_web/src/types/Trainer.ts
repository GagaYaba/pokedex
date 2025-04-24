export interface Trainer {
    id: string;
    name: string;
    age: number;
    region: string;
    starter: {
        name: string;
        type: string;
    };
    avatar: string;
    caughtPokemons: number[];
}
