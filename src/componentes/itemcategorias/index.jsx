import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

 
const ItemCategorias = ({item, seleccionado}) =>{
    
    return  (
        <View style={styles.container}>
            <TouchableOpacity
                style={ {...styles.contenidoContainer, backgroundColor: item.color}}
                onPress={() => seleccionado(item)}>
            <View>
                <Text style={styles.titulo}> {item.title}</Text>
            </View>
           </TouchableOpacity >
        </View>
    )
}

export default ItemCategorias