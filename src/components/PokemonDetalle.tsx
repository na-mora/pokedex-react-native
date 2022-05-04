import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { PokemonFull, Type, Ability} from '../interfaces/pokemonInterface';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull
}
export const PokemonDetalle = ({ pokemon }: Props) => {

    const [evolucion, setEvolucion] = useState(false);

    let arregloTipos: Type[] = [];
    for (let i = 0; i < pokemon.types.length; i++){
        arregloTipos.push(pokemon.types[i]);
    }
    let arregloDebilidades: Ability[] = [];
    for (let x = 0; x < pokemon.abilities.length; x++){
        arregloDebilidades.push(pokemon.abilities[x]);
    }

    return (
        <>
        <View style={estilos.header}>
            <TouchableOpacity
                onPress={ () => setEvolucion(false)}>
                <Text style= {estilos.titulo}>Pokémon</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setEvolucion(true)}>
                <Text style={estilos.titulo}>Evolución</Text>
            </TouchableOpacity>
        </View>
        <View>
            {
                evolucion ?
                (
                    // Evolución
                    <View style={estilos.contenedor}>
                        <View style= {estilos.centrar}>
                            <Image
                            source= {require('../assets/pokeball-invert.png')}
                            style = {estilos.imagenFondo}/>
                        </View>
                        <View style= {estilos.evolucion}>
                            <FadeInImage
                            uri = {pokemon.sprites.front_shiny}
                            style = {estilos.imagenEvolucion}/>

                            <View style={estilos.texto}>
                                <Text style={{...estilos.bold , fontSize: 30, marginRight: 10}}>{pokemon.name}</Text><Text style = {estilos.id}>N°.00{pokemon.id}</Text>
                            </View>
                            <FlatList
                               //estilos
                                data={arregloTipos}
                                keyExtractor={ (tipo) => tipo.type.name}
                                showsVerticalScrollIndicator= {false}
                                numColumns= { 2 }
                                renderItem = {({item})=>(
                                    // Renderizamos el item del card
                                    <View style= {estilos.tipo} >
                                        <Text style= {estilos.tipoItem}>{item.type.name}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                ) :
                (
                    // Pokemon
                    <View style= {estilos.contenedor}>
                        <View style= {estilos.tabla}>
                            <View style= {estilos.columna}>
                                <Text style= {estilos.bold}>Categoria:</Text><Text style= {estilos.valor}>{pokemon.types[0].type.name}</Text>
                            </View>
                            <View style= {estilos.columna}>
                                <Text style= {estilos.bold}>Altura: </Text><Text style= {estilos.valor} >0.{pokemon.height} m</Text>
                            </View>
                            <View style= {estilos.columna}>
                                <Text style= {estilos.bold}>Peso: </Text><Text style= {estilos.valor} >{pokemon.weight} kg</Text>
                            </View>
                            <View style= {estilos.columna}>
                                <Text style= {estilos.bold}>Habilidad: </Text><Text style= {estilos.valor} >{pokemon.abilities[0].ability.name}</Text>
                            </View>

                            <Text style= {estilos.encabezado}>Tipo</Text>

                            <FlatList
                               //estilos
                                data={arregloTipos}
                                keyExtractor={ (tipo) => tipo.type.name}
                                showsVerticalScrollIndicator= {false}
                                numColumns= { 2 }
                                renderItem = {({item})=>(
                                    // Renderizamos el item del card
                                    <View style= {estilos.tipo} >
                                        <Text style= {estilos.tipoItem}>{item.type.name}</Text>
                                    </View>
                                )}
                            />

                            <Text style={estilos.encabezado}> Debilidad </Text>

                            <FlatList
                               //estilos
                                data={arregloDebilidades}
                                keyExtractor={ (tipo) => tipo.ability.name}
                                showsVerticalScrollIndicator= {false}
                                numColumns= { 2 }
                                renderItem = {({item})=>(
                                    // Renderizamos el item del card
                                    <View style= {estilos.debilidad} >
                                        <Text style= {estilos.tipoItem}>{item.ability.name}</Text>
                                    </View>
                                )}
                            />

                        </View>
                    </View>
                )

            }


        </View>
        </>
    );
};

const estilos = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 20,
    },
    titulo: {
        fontSize: 22,
        marginRight: 10,
        paddingBottom: 2,
    },
    contenedor: {
        marginHorizontal: 20,
    },
    tabla: {
        marginTop: 20,
    },
    columna: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 3,
    },
    valor: {
        fontSize: 18,
        marginLeft: 15,
    },
    encabezado: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 2,
    },
    tipo: {
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        alignContent: 'center',
        width: 100,
        backgroundColor: 'black',
        borderRadius: 5,
        marginRight: 6,
    },
    tipoItem:{
        color: 'white',
        fontSize: 18,
    },

    // Evolucion
    centrar: {
        display: 'flex',
        alignItems: 'center',
    },
    evolucion: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -300,
    },
    imagenFondo: {
        marginTop: 30,
        width: 300,
        height: 300,
    },
    imagenEvolucion: {
        width: 200,
        height: 200,
    },
    texto: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    id: {
        fontSize: 20,
    },
    debilidad: {
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        alignContent: 'center',
        width: 100,
        backgroundColor: 'orange',
        borderRadius: 5,
        marginRight: 6,
    },
});
