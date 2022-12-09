import React from "react";
import { styles } from "./styles";
import { View,Text, FlatList, TouchableOpacity } from "react-native";
import ItemCarrito from "../../componentes/itemcarrito";
import { CARRITO } from "../../constantes/data/";
const Carrito = ({navigation}) =>{
    const total = 1500
    const borrar = (id) =>{
       console.warn("borrar",id)
    }
    const renderItem = ({item}) =>(<ItemCarrito item = {item} borrar = {borrar}/>)
    const keyExtractor = (item) => item.id.toString();
    return(
        <View style={styles.container}>
            <View style={styles.listaContenedor}> 
               <FlatList data={CARRITO} renderItem={renderItem} style={styles.listaContenedor} keyExtractor={keyExtractor}/>  
          </View>
            <View style={styles.pieContainer}>
                <TouchableOpacity
                    style={styles.botonStyle} onPress={()=>NULL}>
                    <Text style={styles.textoConfirmado}>CONFIRMADO</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.titulototal}>TOTAL</Text>
                        <Text style={styles.textototal}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>    
        </View>
    )
 }
 export default Carrito