import {useEffect} from 'react';
import { useClipboard } from '@react-native-clipboard/clipboard';
import { PokemonFull } from '../interfaces/pokemonInterface';

export const useClipBoard = (pokemon: PokemonFull) => {
    const [data, setString] = useClipboard();

    const id = pokemon.id;
    const name = pokemon.name;
    const habilidades = pokemon.abilities;
    const altura = pokemon.height;
    const peso = pokemon.weight;
    const tipos = pokemon.types;
    const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;

    const texto = 'Id: ' + id + ', Nombre: ' + name + ', Habilidades: ' + habilidades + ', Altura: ' + altura + ', Peso: ' + peso
            + ', Tipos: ' + tipos + ', Imagen: ' + imagen;
    useEffect(()=>{
        setString(texto);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        data,
    };
};
