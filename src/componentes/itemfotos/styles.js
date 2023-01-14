import { StyleSheet } from "react-native";
import { COLORES } from "../../constantes/temas";

export const styles = StyleSheet.create({
    container:{
        
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        borderBottomColor:COLORES.gris,
        borderBottomWidth:1
    },
    imagen:{
    width:70,
    height:70,
    borderRadius:20,
    },
infoContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start",
    marginLeft:15
},
titulo:{
    fontSize:16,
    marginBottom:10,
}
})