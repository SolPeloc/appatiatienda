import { StyleSheet } from "react-native";
import { COLORES } from "../../constantes/temas";
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center"
    },
    titulo:{
        marginTop:20,
        fontFamily:"poppins-bold",
        textAlign:"center",
        fontSize:20,
        marginBottom:20
    },
    containerInput:{
        flex:1,
        margin:20
    },
    input:{
        borderColor: COLORES.gris,
        padding:5,
        marginBottom:20,
        borderBottomWidth: 0.5
    },
    containerFoto:{
        width:"100%",
        height:200
    }
})