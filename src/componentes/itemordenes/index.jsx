import React from "react";
import { styles } from "./styles";
import { View,Text,TouchableOpacity } from "react-native";
import {formatoFecha} from "../../utilidades/index"
import {Ionicons} from "@expo/vector-icons"

const ItemOrdenes = ({item, borrar}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.cabeceraContainer}>
                <Text style={styles.fecha}>{formatoFecha(item.fecha)}</Text>
            </View>
            <View style={styles.contenidoContainer}>
                <View style={styles.contenido}>
                    <Text style={styles.total}>${item.total}</Text>
                </View>
                    <TouchableOpacity onPress={()=>borrar(item.id)} >
                        <Ionicons name="trash"size={20} />  
                    </TouchableOpacity>  
            </View>
        </View>
    )
}
export default ItemOrdenes