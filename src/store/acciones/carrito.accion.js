import { carritoTipos } from "../tipos";
import { URL_BASE } from "../../constantes/firebase";
const {AÑADIR_AL_CARRITO, REMOVER_DE_CARRITO, CONFIRMAR_ORDEN} = carritoTipos

export const añadirAlCarrito = (item) => ({
    type: AÑADIR_AL_CARRITO,
    item
})

export const removerDeCarrito = (id) => ({
    type: REMOVER_DE_CARRITO,
    id
})




export const confirmarCarrito = (items,total) =>{
        return async (despachador) =>{
                    try{ 
                        const responde = await fetch(`${URL_BASE}/ordenes.json`,{
                            method: "POST",
                            headers: { "content-type" : "apliccation/json"},
                            body: JSON.stringify({
                                fecha : Date.now(),
                                items,
                                total,
                            })
                        })
                        const resultado = await responde.json()
                        despachador({
                            type: CONFIRMAR_ORDEN,
                            resultado
                        });
                } catch (error){
                    console.log(error)
                }
    }
}