import React, {useState, useEffect, useRef} from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import { PokemonSimple } from '../interfaces/pokemonInterface';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: PokemonSimple
}



export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('grey');
    const estaMontado = useRef(true);
    const navigation = useNavigation<any>();


    useEffect(()=>{
        ImageColors.getColors(pokemon.picture, {fallback: 'grey'})
        .then(colores => {

            if (!estaMontado.current)
            {
                return;
            }

            if ( colores.platform === 'android'){
                // Android
                setBgColor(colores.dominant || 'grey');
            }


        });

        return () => {
            estaMontado.current = false;
        };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('PokemonScreen', {pokemon: pokemon, color: bgColor})}
            activeOpacity={ 0.5 }>
            <View style= {{...estiloCard.cardContainer, backgroundColor: bgColor}}>
                <View style= {estiloCard.contenedorFondo}>
                    <Image
                        source={require('../assets/pokeball.png')}
                        style = {estiloCard.fondo}
                    />
                </View>
                <View >
                    <View style = {estiloCard.contenedor}>
                        <Text style = {estiloCard.id}>N°00{pokemon.id}</Text>
                        <Text style = {estiloCard.name}>{pokemon.name}</Text>
                        <Text>{pokemon.color}</Text>
                    </View>
                    <View>
                        <FadeInImage
                            uri= {pokemon.picture}
                            style = {estiloCard.imagen}
                            />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const estiloCard = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        //backgroundColor: 'grey',
        height: 120,
        width: windowWidth * 0.45,
        marginBottom: 25,
        borderRadius: 10,
        display:'flex',
        flexDirection: 'row',
    },
    contenedorFondo: {
        display: 'flex',
        flexDirection: 'row',
        width: windowWidth * 0.45,
        justifyContent: 'flex-end',
    },
    contenedor: {
        marginLeft: -150,
    },
    name: {
        letterSpacing: 0,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        top: 5,
        textAlign: 'left',
    },
    contenedorDerecha: {
        display: 'flex',
        width: 160,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    id: {
        top: 2,
        letterSpacing: 0,
        marginLeft: 105,
        color: 'white',
    },
    fondo: {
        width: 90,
        height: 90,
        margin: 0,
        position: 'absolute',
        marginLeft: 7,
        marginTop: 15,
    },
    imagen: {
        marginLeft: -70,
        height: 90,
        width: 90,
        marginBottom: 30,
    },
});
