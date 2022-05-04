import { useState, useEffect } from 'react';
import { PokemonFull } from '../interfaces/pokemonInterface';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonFull = (id: string) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemonFull, setPokemon] = useState<PokemonFull>({} as PokemonFull);


    // Funciones Auxiliares
    const loadPokemon = async()=>{
        setTimeout(async ()=>{
            const resp = await pokemonApi.get<PokemonFull>('https://pokeapi.co/api/v2/pokemon/' + id);
            setPokemon(resp.data);
            setIsLoading(false);
        }, 2000);
    };

    useEffect(()=>{
        loadPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        isLoading,
        pokemonFull,
    };
};

