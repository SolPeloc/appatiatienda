import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORES } from "../../constantes/temas";
export const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:COLORES.blanco
        },
        listaContenedor:{
            flex:1,
            backgroundColor:COLORES.blanco,
        },
        pieContainer:{
            backgroundColor: COLORES.blanco,
            borderTopWidth:0.5,
            borderTopColor: COLORES.secundario,
            paddingVertical:10,
            marginBottom:10,
            marginHorizontal:10
        },
        botonStyle:{
            backgroundColor:COLORES.fondo,
            borderRadius:5,
            paddingHorizontal:20,
            paddingVertical:15,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        },
        desbotonStyle:{
            backgroundColor:COLORES.blanco,
            borderRadius:5,
            paddingHorizontal:20,
            paddingVertical:15,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center" 
        },
        textoConfirmado:{
            fontSize:14,
            fontFamily:"poppins-regular"
        },
        totalContainer:{
            flex:0.4,
            flexDirection:"row",
            justifyContent:"space-between"
        },
        titulototal:{
            fontSize:14,
            fontFamily:"poppins-italic"
        },
        textototal:{
            fontSize:14,
            fontFamily:"poppins-bold"
        },
        textoCarrito:{
            fontFamily: "poppins-bold",
            textAlign: "center",
            margin:20,
            fontSize:18
        }
})