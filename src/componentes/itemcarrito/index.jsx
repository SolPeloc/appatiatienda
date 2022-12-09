import React from "react";
import { styles } from "./styles";
import { View,Text, TouchableOpacity } from "react-native";
import {Ionicons} from "@expo/vector-icons"
const ItemCarrito = ({item, borrar}) => {
    return(
        <View style={styles.container}>
                    <View style={styles.cabeceraContainer}>
                        <Text style={styles.titulo}>{item.título}</Text>
                    </View>
                <View style={styles.contenidoContainer}>
                    <View style={styles.contenido}>
                        <Text style={styles.cantidad}>{item.cantidad}</Text>
                        <Text style={styles.precio}>${item.precio}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>borrar(item.id)} >
                        <Ionicons name="trash"size={20} />  
                    </TouchableOpacity>  
                </View>  
        </View>
    )
}
export default ItemCarrito