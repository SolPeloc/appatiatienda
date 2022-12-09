import React from "react";
import { View,Text } from "react-native";
import { styles } from "./styles";
import {PRODUCTOS} from "../../constantes/data/"
const Producto = ({navigation,route}) =>{
    const {productoId} = route.params
    const filtradoProducto = PRODUCTOS.find((producto) => producto.id === productoId)
    const {titulo,precio,descripcion}= filtradoProducto || {}
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text>{descripcion}</Text>
                <Text style={styles.titulo}>${precio}</Text>
            </View>
        )
}
export default Producto