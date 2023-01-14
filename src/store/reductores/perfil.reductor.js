import { perfilTipos } from "../tipos"
import Item from "../../modelos/item"
const {AGREGAR_FOTO, GUARDAR_FOTO} =  perfilTipos

const estadoInicial = {
  lista : [],
}

const perfilReductor = (estado =  estadoInicial, accion) =>{
  switch(accion.type){
    case  AGREGAR_FOTO :

    const nuevaFoto = new Item (Date.now().toString(), accion.titulo, accion.imagen)

    estado.lista.push(nuevaFoto)
       return{
        ...estado,
        lista : [nuevaFoto]
       }

    case GUARDAR_FOTO :
      return{
        ...estado,
        lista: estado.lista
      }
    
    default:
      return estado
  } 
  
  
  }

  

export default perfilReductor