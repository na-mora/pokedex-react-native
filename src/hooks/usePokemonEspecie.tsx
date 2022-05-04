import { useState, useEffect } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonEspecie } from '../interfaces/pokemonInterface';

export const usePokemonEspecie = (id: string) => {
    const [isLoadingEspecie, setIsLoading] = useState(true);
    const [pokemonEspecie, setPokemonEspecie] = useState<PokemonEspecie>({} as PokemonEspecie);

    // Funciones axuliares
    const loadPokemon = async ()=>{
        const resp = await pokemonApi.get<PokemonEspecie>('https://pokeapi.co/api/v2/pokemon-species/' + id);
        setPokemonEspecie(resp.data);
        console.log(pokemonEspecie);
        setIsLoading(false);
    };

    useEffect(()=>{
        loadPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        isLoadingEspecie,
        pokemonEspecie,
    };
};
