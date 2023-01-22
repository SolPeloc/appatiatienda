import { StyleSheet } from "react-native";
import { COLORES } from "../../constantes/temas";

export const styles = StyleSheet.create({
    container:{ 
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        borderBottomColor:COLORES.primario,
        borderBottomWidth:0.5
    },
    ide:{
        marginRight:10
    },
    imagen:{
        width:150,
        height:150,
        borderRadius:20,
    },
    infoContainer:{
        flex:1,
        justifyContent:"center",
        alignItems: "flex-start",
        marginLeft:15
    },
    titulo:{
        fontSize:16,
        marginBottom:10,
        fontFamily: "poppins-bold",
    }
})