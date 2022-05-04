export default class Pokemon{

    id: string = '';
    nombre: string= '';
    color: string = '';
    imagen: string = '';
    descripcion: string = '';
    categoria: string = '';
    altura: string = '';
    peso: string = '';
    habilidad: string = '';
    tipos: any[] = [];
    debilidades: any[] = [];

    //-----------------------------------------
    // Constructor
    //-----------------------------------------
    constructor(pId: string, pNombre:string, pColor: string, pImagen: string, pDescripcion: string ,pCategoria: string , pAltura: string , pPeso: string, pHabilidad: string , pTipos: any[] , pDebilidades: any[] ){
        this.id = pId;
        this.nombre = pNombre;
        this.color = pColor;
        this.imagen = pImagen;
        this.descripcion = pDescripcion;
        this.categoria = pCategoria;
        this.altura = pAltura;
        this.peso = pPeso;
        this.habilidad = pHabilidad;
        this.tipos = pTipos;
        this.debilidades = pDebilidades;
    }

    //-----------------------------------
    // Metodos
    //-----------------------------------

    toString(){
        const separador = ',';

        let info = this.id + separador + ' Nombre: ' + this.nombre + separador + ' Color: ' + this.color + separador + ' Imagen: ' +
            this.imagen + separador + ' Descripcion:  ' + this.descripcion + separador + ' Categoria: ' + this.categoria + separador + 'Altura: ' +
            this.altura + separador + ' Peso: ' + this.peso + separador + ' Habilidad:  ' + this.habilidad + separador + ' Tipos: ' + this.tipos + separador
            + ' Debilidades: ' + this.debilidades;

        return info;
    }
}
