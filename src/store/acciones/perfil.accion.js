import { perfilTipos } from "../tipos";
import * as FileSystem from "expo-file-system"

const {AGREGAR_FOTO, GUARDAR_FOTO} =  perfilTipos

export const agregarFoto = (titulo, imagen) => ( {
    type : AGREGAR_FOTO,
    lista : titulo, imagen
}) 

 export const guardarFoto = ({titulo,imagen}) =>{
     return async(despachador) =>{
                                //const fileName = image.split("/").pop()
                                //const newPath = FileSystem.documentDirectory + fileName

       try{
                    //await FileSystem.moveAsync({
                    // from: image,
                    // to: newPath
                // })

     console.log(imagen,"imagen")
      }
       catch (error){
        console.log(error)
       }
      despachador(agregarFoto({titulo,imagen }))
     }

     
 }
