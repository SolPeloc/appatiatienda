import { perfilTipos } from "../tipos";
import { insertarFoto, obtenerFotos } from "../../db";

const {AGREGAR_FOTO, GUARDAR_FOTO,SET_FOTOS} =  perfilTipos

export const agregarFoto = (titulo, imagen) => ( {
    type : AGREGAR_FOTO,
    lista : titulo, imagen
}) 

export const setFoto = () =>({
  type: SET_FOTOS,
  lista 
})
export const guardarFoto = ({titulo,imagen}) =>{
    return async(despachador) =>{           
      try{     
          const result = await insertarFoto(titulo,imagen)
          console.warn(result)
        despachador(agregarFoto({id:result.insertId, titulo,imagen} ))
      
    }
        catch (error){
        console.log(error)
        throw error
      }  
    }   
}

export const cargarFotos = () => {
  return async(despachador) => {
    try {
      const result = await obtenerFotos()
      console.log(result)
      despachador({
        type: SET_FOTOS,
        lista:result?.rows?._array
      })
    } catch (error) {
      console.warn(error);
      throw error;
    }   
  }
}
