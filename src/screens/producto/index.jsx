import React from "react";
import { View,Text } from "react-native";
import { styles } from "./styles";
import {PRODUCTOS} from "../../constantes/data/"
const Producto = ({navigation,route}) =>{
    const {productoId} = route.params
    const filtradoProducto = PRODUCTOS.find((producto) => producto.id === productoId)
    const {title,price,description,weight}= filtradoProducto || {}
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>{title}</Text>
                <Text>{description}</Text>
                <Text>{weight}</Text>
                <Text style={styles.titulo}>${price}</Text>
            </View>
        )
}
export default Producto