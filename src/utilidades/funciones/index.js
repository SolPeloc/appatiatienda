import { Platform } from "react-native";

export const esIOS = Platform.OS === "ios";
export const esANDROID = Platform.OS === "android";

export const formatoFecha = (tiempo) =>{
    const fecha = new Date(tiempo)
    return fecha.toLocaleDateString()
}