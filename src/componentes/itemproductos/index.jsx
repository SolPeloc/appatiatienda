import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


const ItemProductos = ({item,seleccionado,color}) =>{
   return(
    <View style={{...styles.container, backgroundColor: color}}>
        <TouchableOpacity
            style={styles.item}
            onPress={()=>seleccionado(item)}
            >
                <Text style={styles.titulo}>{item.titulo}</Text>
                    <View style={styles.detalleContainer}>
                        <Text style={styles.precio}>${item.precio}</Text>
                </View>
        </TouchableOpacity>
    </View>
   )
}
export default ItemProductos