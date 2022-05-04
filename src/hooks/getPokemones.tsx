import axios from 'axios';
import Pokemon from '../models/Pokemon';

const urlPokedex = 'https://pokeapi.co/api/v2/pokemon-species';
const urlInfo = 'https://pokeapi.co/api/v2/pokemon';
const numeroPokemonesMostrar = 9;

let pokemones: Pokemon[] = [];

const getPokemones = async ()=>{

    // Datos de cada pokemon
    let id = '';
    let nombre = '';
    let imagen = '';
    let altura = '';
    let peso = '';
    let habilidad = '';
    let tipos: any[] = [];
    let color = '';
    let descripcion = '';
    let categoria = '';
    let debilidades: any[] = [];

    for (let index = 1; index < ( numeroPokemonesMostrar + 1 ); index++){
        let rutaNueva = urlInfo + '/' + index;
        await axios.get(rutaNueva).then(response=>{

          // Inicio de la peticion AJAX
          id = response.data.id;
          nombre = response.data.name;
          imagen = response.data.sprites.front_default;
          altura = response.data.height;
          peso = response.data.weight;
          habilidad =  response.data.abilities[0].ability.name;
          tipos = new Array(response.data.types);

          // Fin de la peticion AJAX
        });
        let urlContada = urlPokedex + '/' + index;
        await axios.get(urlContada).then(response=>{
            // Inicio de la peticion AJAX
            color = response.data.color.name;
            descripcion = response.data.flavor_text_entries[34].flavor_text;
            categoria = response.data.egg_groups[1].name;
            // Fin de la peticion AJAX
        });
        const tamano = tipos[0].length;
        for (let i = 0; i < tamano; i++){
            const urlTipo = tipos[0][i].type.url;
          await axios.get(urlTipo).then((response)=>{
            debilidades = new Array(response.data.damage_relations.double_damage_from);
          }); // termina la peticion ajax
        }
         let nuevoPokemon = new Pokemon(id, nombre, color, imagen, descripcion,
                    categoria, altura, peso, habilidad, tipos, debilidades);
          pokemones.push(nuevoPokemon);
    }// end_for-principal de 1 a 7
    return pokemones;
};


export default getPokemones;

