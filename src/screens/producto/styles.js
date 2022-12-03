import { StyleSheet } from "react-native";
import { Colores } from "../../constantes/temas";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colores.fondo
    },
    titulo:{
        fontSize:20,
        fontFamily: "poppins-bold",
        color: Colores.texto
    }
})