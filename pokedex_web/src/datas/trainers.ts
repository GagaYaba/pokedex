import { Trainer } from "../types/Trainer";

export const trainers: Trainer[] = [
    {
        id: "ash",
        name: "Sacha",
        age: 10,
        region: "Kanto",
        starter: {
            name: "Pikachu",
            type: "Électrik",
        },
        avatar: "/assets/ash.png",
        caughtPokemons: [1, 4, 7, 25]
    },
    {
        id: "red",
        name: "Régis",
        age: 12,
        region: "Kanto",
        starter: {
            name: "Evoli",
            type: "Normal",
        },
        avatar: "/assets/red.png",
        caughtPokemons: []
    },
    {
        id: "jessie",
        name: "Jessie",
        age: 25,
        region: "Kanto",
        starter: {
            name: "Arbok",
            type: "Poison",
        },
        avatar: "/assets/jessie.png",
        caughtPokemons: []
    },
    {
        id: "james",
        name: "James",
        age: 26,
        region: "Kanto",
        starter: {
            name: "Smogo",
            type: "Poison",
        },
        avatar: "/assets/james.png",
        caughtPokemons: []
    },
];
