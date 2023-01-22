import {  URL_AUT_INGRESO, URL_AUT_REGISTRO} from "../../constantes/firebase";
import { autenticacionTipos } from "../tipos";

const {INGRESO, REGISTRO} = autenticacionTipos

export const registro = (email,password) =>{
    return async (despachador) =>{
        try{
            const consulta = await fetch(URL_AUT_REGISTRO,{
                method:"POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email,
                    password,
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
        throw error
        }
    }
}

export const ingreso = (email, password) =>{
    return async(despachador) =>{
        try{
            const consulta = await fetch(URL_AUT_INGRESO,{
                method: "POST",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken : true,
                })
            })
            const data = await consulta.json()
            despachador({
                type: INGRESO,
                token : data.idToken,
                usuarioId : data.localId
            })
        }catch (error){
            throw error
        }
    }
}
