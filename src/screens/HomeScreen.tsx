import React from 'react';
import {Image, Text, FlatList, ActivityIndicator} from 'react-native';
import { PokemonCard } from '../components/PokemonCard';
//import { useComplexList } from '../hooks/useComplexList';
import { usePokemon } from '../hooks/usePokemon';
import estilos from '../theme/appTheme';

export const HomeScreen = () => {

    // Hacemos la peticion axios
    const {simplePokemonList, loadPokemones} = usePokemon();
    //useComplexList();
    return (
        <>
            <Image source = { require('../assets/pokeball-invert.png')}
                    style={estilos.pokebolaBG}/>
            <Image source={ require('../assets/menu.png')}
                    style={estilos.menu}/>
            <Text style = {estilos.titulo}>Pokedex</Text>
            <FlatList
                style ={estilos.listado}
                data={simplePokemonList}
                keyExtractor={ (pokemon) => pokemon.id}
                showsVerticalScrollIndicator= {false}
                numColumns= { 2 }
                renderItem = {({item})=>(
                    // Renderizamos el item del card
                    <PokemonCard pokemon = {item}/>
                )}

                // Infinite scroll
                onEndReached= {loadPokemones}
                onEndReachedThreshold={0.4} //40% del scroll

                ListFooterComponent={ <ActivityIndicator
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{ height:100 }}
                    size={20}
                    color="grey"
                    />}
            />
        </>
    );
};



