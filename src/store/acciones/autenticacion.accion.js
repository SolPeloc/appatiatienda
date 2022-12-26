import {  URL_AUT_REGISTRO} from "../../constantes/firebase";
import { autenticacionTipos } from "../tipos";

const {INGRESO, REGISTRO} = autenticacionTipos

export const registro = (email,contraseña) =>{
    return async (despachador) =>{
        try{
            const consulta = await fetch(URL_AUT_REGISTRO,{
                method:"POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email,
                    contraseña,
                    returnSecureToken : true,
                })

            })
            if (!consulta.ok){
                throw new Error ("Algo salió mal")
            }
            const data = await consulta.json()
            despachador({
                type : REGISTRO,
                token : data.idToken,
                usuarioId : data.localId
            })

        }catch (error) {
           console.log(error)
        }
    }

}

