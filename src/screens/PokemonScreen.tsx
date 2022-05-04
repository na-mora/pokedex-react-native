import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';
import { RootStackParams } from '../navigator/navigator';
import { FadeInImage } from '../components/FadeInImage';
import { useNavigation } from '@react-navigation/native';
import { usePokemonFull } from '../hooks/usePokemonFull';
import { PokemonDetalle } from '../components/PokemonDetalle';
import { usePokemonEspecie } from '../hooks/usePokemonEspecie';

//import { PokemonEspecie, PokemonFull } from '../interfaces/pokemonInterface';
import { useClipBoard } from '../hooks/useClipBoard';
import * as ImagePicker from 'react-native-image-picker';


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

const windowWidth = Dimensions.get('window').width;


export const PokemonScreen = ({route}: Props) => {
    const navigation = useNavigation<any>();
    const {pokemon, color} = route.params;

    const {pokemonFull, isLoading} = usePokemonFull(pokemon.id);
    const {pokemonEspecie, isLoadingEspecie} = usePokemonEspecie(pokemon.id);

    useClipBoard(pokemonFull);

    let options: {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
    };
    //const [image, setImage] = useState('https://via.placeholder.com/200');
    const launchCamera = () => {
        ImagePicker.launchCamera(options,(response) => {
            if (response.errorCode){
                console.log(response.errorMessage);
            }
            else if (response.didCancel){
                console.log('El usuario cancelo la fotografia');
            }
            else {

            }
        });

      };

    return (
        <>
        <View style = {{...estilos.principal, backgroundColor: color}}>
            <View style = {estilos.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen',{})}>

                    <Image
                        source= {require('../assets/Trazado.png')}/>
                </TouchableOpacity>

                <View style = {estilos.elementosDerecha}>
                    <TouchableOpacity
                        onPress={() => launchCamera()}>
                        <Image
                            source={require('../assets/camara-invert.png')}
                            style = {estilos.camara}/>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {}}>
                        <Image
                            source= {require('../assets/Logout.png')}
                            style= {estilos.imagenFlecha}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style= {estilos.titulo}>
                <Text style= {estilos.name}>{pokemon.name}</Text>
                <Text style= {estilos.id}>N°00{pokemon.id}</Text>
            </View>

            <View style={estilos.descripcion}>
                {
                    isLoadingEspecie ?
                    (
                        <Text>...</Text>
                    ) :
                    (
                        <Text style={estilos.desc}>{pokemonEspecie.flavor_text_entries[26].flavor_text}</Text>
                    )
                }

                <View style= {estilos.contenedorImagen}>
                    <FadeInImage
                        uri={pokemon.picture}
                        style = {estilos.imagen}/>
                </View>
            </View>
        </View>
        <View style= {estilos.fondo}>
            <Image
                source={require('../assets/pokeball.png')}
                style= {estilos.fondoImagen}/>
        </View>

        <View style= {{...estilos.secundario, backgroundColor: color}}>

                {
                    isLoading ? (
                        <View style = {estilos.detalleCargando}>
                        <ActivityIndicator
                            color = { color }
                            size = { 60 }
                        />
                        </View>
                    ) :
                    (
                        <View style = {estilos.detalle}>
                        <PokemonDetalle pokemon = {pokemonFull}/>
                        </View>
                    )
                }

        </View>
        </>
    );
};

const estilos = StyleSheet.create({
    principal: {
        flex: 1,
        position: 'absolute',
        height: 350,
    },
    header: {
        paddingTop: 15,
        width: windowWidth,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imagenFlecha: {
        width: 40,
        height: 40,
        marginTop: -15,
        marginRight: 20,
    },
    titulo:{
        display: 'flex',
        width: windowWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    name: {
        fontSize: 45,
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    id: {
        fontSize: 20,
        color: 'white',
        paddingRight: 20,
    },
    descripcion: {
        marginHorizontal: 20,
    },
    desc: {
        fontSize: 16,
        color: 'white',
    },
    contenedorImagen: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
    },
    imagen: {
        width: 150,
        height: 150,
        marginTop: 0,
        marginLeft: -30,
    },
    fondo:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    fondoImagen: {
        height: 200,
        width: 200,
        marginTop: 140,
    },
    secundario: {
        flex: 1,
        height: 150,
        width: windowWidth,
        position: 'relative',
    },
    detalleCargando: {
        width: windowWidth,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'relative',
        height: 500,
        diplay: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    detalle: {
        width: windowWidth,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 500,
    },

    elementosDerecha: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    camara: {
        width: 50,
        height: 50,
        marginRight: 15,
        marginBottom: 15,
    },

});


