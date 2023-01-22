import { perfilTipos } from "../tipos"
import Item from "../../modelos/item"
const {AGREGAR_FOTO, GUARDAR_FOTO, SET_FOTOS} =  perfilTipos

const estadoInicial = {
  lista : [],
}

const perfilReductor = (estado =  estadoInicial, accion) =>{
    switch(accion.type){
      case  AGREGAR_FOTO :
      const nuevaFoto = new Item (accion.lista.id, accion.lista.titulo, accion.lista.imagen)
        return{
          ...estado,
          lista :  estado.lista.concat(nuevaFoto)
        }
      case GUARDAR_FOTO :
        return{
          ...estado,
          lista: estado.lista
        }
        case SET_FOTOS :
          return {
            ...estado,
            lista : accion.lista.map(item => new Item(item.id,item.titulo,item.imagen))
          }
      
      default:
        return estado
    } 
}

  

export default perfilReductor