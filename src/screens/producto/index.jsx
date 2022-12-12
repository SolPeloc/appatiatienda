import React from "react";
import { View,Text,Image } from "react-native";
import { styles } from "./styles";
import {CATEGORIAS, PRODUCTOS} from "../../constantes/data/"
const Producto = ({navigation,route}) =>{
    const {productoId} = route.params
    const filtradoProducto = PRODUCTOS.find((producto) => producto.id === productoId)
    const {titulo,precio,descripcion,imagen}= filtradoProducto || {}
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