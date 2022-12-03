import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Colores } from "../../constantes/temas";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colores.fondo
    },
    titulo:{
        fontFamily:"poppins-bold",
        fontSize:20,
        color:Colores.texto
       
    }
})