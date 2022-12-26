import { ordenesTipos } from "../tipos";

const {OBTENER_ORDEN, ELIMINAR_ORDEN} =  ordenesTipos

const estadoInicial = {
    lista: [],

}

const ordenReductor = (estado =  estadoInicial, accion) =>{
    switch (accion.type){
        case OBTENER_ORDEN:
            return{
                ...estado,
                lista : accion.ordenes
            }
        case ELIMINAR_ORDEN : 
            return{
                ...estado,
                lista : estado.lista.filter((orden) => orden.id != accion.id)
            }
        default: 
         return estado
    }
}

export default ordenReductor