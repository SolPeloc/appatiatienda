import React from "react";
import { View,Text,Image } from "react-native";
import { styles } from "./styles";
import {CATEGORIAS, PRODUCTOS} from "../../constantes/data/"
import { useSelector } from "react-redux";
const Producto = ({navigation}) =>{
    const producto = useSelector((state) => state.productos.productoSeleccionado)

   
    const {titulo,precio,descripcion,imagen}= producto || {}
        return (
            <View style={styles.container}>
                <Image source={imagen} style={styles.imagen}/>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text>{descripcion}</Text>
                <Text style={styles.titulo}>${precio}</Text>
            </View>
        )
}
export default Producto