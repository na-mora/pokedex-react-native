import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonResponse, PokemonSimple, Result } from '../interfaces/pokemonInterface';

export const usePokemon = () => {
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=20');

    const [simplePokemonList, setSimplePokemonList] = useState<PokemonSimple[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    //Procesamos los datos
    const mapPokemonList = (pokemonesList: Result[])=>{
        const nuevoPokemonList: PokemonSimple[] = pokemonesList.map(({ name, url})=>{
            const urlPartes = url.split('/');
            const id = urlPartes[urlPartes.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;

            return {
                id, picture, name,
            };
        });
        setSimplePokemonList([...simplePokemonList, ...nuevoPokemonList]);
        setIsLoading(false);
    };

    const loadPokemones = async () =>{
        setIsLoading(true);
        const resp = await pokemonApi.get<PokemonResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results);
    };

    useEffect(()=>{
        loadPokemones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        simplePokemonList,
        isLoading,
        loadPokemones,
    };


};




