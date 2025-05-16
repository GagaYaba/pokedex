export interface IPokemonData {
    pokedex_id: number;
    name: {
        fr: string;
        en: string;
        jp: string;
    };
    sprites: {
        regular: string;
        shiny: string;
    };
    types: {
        name: string;
        image: string;
    }[];
    category: string;
    talents: {
        name: string;
        tc: boolean;
    }[];
    stats: {
        hp: number;
        atk: number;
        def: number;
        spe_atk: number;
        spe_def: number;
        vit: number;
    };
    resistances: {
        name: string;
        multiplier: number;
    }[];
    evolution: {
        pre: null | any;
        next: {
            pokedex_id: number;
            name: string;
            condition: string;
        }[];
        mega: null | any;
    };
    height: string;
    weight: string;
    egg_groups: string[];
    sexe: {
        male: number;
        female: number;
    };
    catch_rate: number;
    level_100: number;
}