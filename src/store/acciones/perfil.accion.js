import { perfilTipos } from "../tipos";

const {AGREGAR_FOTO, GUARDAR_FOTO} =  perfilTipos

export const agregarFoto = (titulo, imagen) => ( {
    type : AGREGAR_FOTO,
    lista : titulo, imagen
}) 

 //export const guardarFoto = ({titulo,imagen}) =>{
    //  return async(despachador) =>{
     //  try{
    //  console.log(imagen,"imagen")
     //  }
      // catch (error){
      //  console.log(error)
      // }
     //  despachador(agregarFoto({titulo,imagen }))
     // }

     
 //}
