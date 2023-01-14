import { StyleSheet } from "react-native";
import { COLORES } from "../../constantes/temas";

export const styles = StyleSheet.create({
    container :{
        flex: 1,
       marginBottom:20
       
    },
    previa:{
        width:"100%",
        height:200,
        marginBottom: 20,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center",
        borderColor:COLORES.gris,
        borderWidth: 1
    },
    titulo:{
        fontFamily: "poppins-regular",
        fontSize:16
    },
    imagen:{
        width:"100%",
        height:"100%"
    },

})