import { Trainer } from "../types/Trainer";

export const trainers: Trainer[] = [
    {
        id: 1,
        name: "Sacha",
        age: 10,
        region: "Kanto",
        starter: {
            name: "Pikachu",
        },
        avatar: "/assets/ash.png",
        caughtPokemons: [25, 3, 6, 9]
    },
    {
        id: 2,
        name: "Régis",
        age: 12,
        region: "Kanto",
        starter: {
            name: "Evoli",
        },
        avatar: "/assets/red.png",
        caughtPokemons: []
    },
    {
        id: 3,
        name: "Jessie",
        age: 25,
        region: "Kanto",
        starter: {
            name: "Arbok",
        },
        avatar: "/assets/jessie.png",
        caughtPokemons: []
    },
    {
        id: 4,
        name: "James",
        age: 26,
        region: "Kanto",
        starter: {
            name: "Smogo",
        },
        avatar: "/assets/james.png",
        caughtPokemons: []
    },
];
