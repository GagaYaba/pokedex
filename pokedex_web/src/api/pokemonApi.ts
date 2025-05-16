import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPokemonData } from '../types/pokedexApi.ts';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://tyradex.vercel.app/api/v1/' }),
    tagTypes: ['PokemonGen'],

    endpoints: (builder) => ({
        getGen: builder.query<IPokemonData[], number | void>({
            query: (gen) => `pokedex/${gen}`,
            providesTags: () => ['PokemonGen'],
        }),

    getPokemon: builder.query<IPokemonData, number>({
            query: (id) => `pokemon/${id}`,
        }),

    fakeApiPost: builder.mutation<number, number>({
            query: (id) => ({
                url: `pokemon/${id}`,
                method: 'POST',
                body: { id },
            }),
            invalidatesTags: ['PokemonGen'],
        }),
    }),
});

export const { useGetGenQuery, useGetPokemonQuery, useFakeApiPostMutation } = pokemonApi;