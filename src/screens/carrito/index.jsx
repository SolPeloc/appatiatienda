import React from "react";
import { styles } from "./styles";
import { View,Text, FlatList, TouchableOpacity } from "react-native";
import ItemCarrito from "../../componentes/itemcarrito";
import { useSelector,useDispatch } from "react-redux";
import { removerDeCarrito,confirmarCarrito } from "../../store/acciones/carrito.accion";

const Carrito = ({navigation}) =>{
        const carrito = useSelector((estado) => estado.carrito.items)
        const total = useSelector((estado) => estado.carrito.total)
        const despachador = useDispatch()
        const borrar = (id) => {despachador(removerDeCarrito(id))}
        const crearOrden = () => {despachador(confirmarCarrito(carrito,total))}
        const renderItem = ({item}) =>(<ItemCarrito item = {item} borrar = {borrar}/>)
        const keyExtractor = (item) => item.id.toString();
        return(
            <> 
                {carrito.length === 0 ? (
                    <Text style={styles.textoCarrito}> Tu carrito esta vacio ({total})</Text>): 
                    <View style={styles.container}>
                            <View style={styles.listaContenedor}> 
                                <FlatList data={carrito} renderItem={renderItem} style={styles.listaContenedor} keyExtractor={keyExtractor}/>  
                                </View>
                                    <View style={styles.pieContainer}>
                                        <TouchableOpacity
                                            disabled={carrito.length === 0}
                                            style={carrito.length === 0 ? styles.desbotonStyle : styles.botonStyle} onPress={crearOrden}>
                                            <Text style={styles.textoConfirmado}>CONFIRMADO</Text>
                                            <View style={styles.totalContainer}>
                                                <Text style={styles.titulototal}>TOTAL :</Text>
                                                <Text style={styles.textototal}>${total}</Text>
                                            </View>
                                        </TouchableOpacity>
                            </View> 
                    </View>
                }
            </>  )
}
export default Carrito