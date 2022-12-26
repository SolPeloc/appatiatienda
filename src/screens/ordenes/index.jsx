import React from "react";
import { useCallback} from "react";
import { styles } from "./styles";
import { View,Text, FlatList } from "react-native";
import ItemOrdenes from "../../componentes/itemordenes";
import { useSelector,useDispatch } from "react-redux";
import { obtenerOrdenes,eliminarOrden } from "../../store/acciones/ordenes.accion";
import { useFocusEffect } from "@react-navigation/native";
const Ordenes = ({navigation}) =>{
    const despachador =  useDispatch();
    const ordenes = useSelector((estado) => estado.ordenes.lista)
    const renderItem = ({item}) =>(<ItemOrdenes item={item} borrar={borrar}/>)
    const borrar = (id) =>{
        despachador(eliminarOrden(id))
    }
    useFocusEffect(
            useCallback(() =>{
                despachador(obtenerOrdenes())
            },[despachador])
        )
    return(
        <View style={styles.container}>
            <FlatList
            data={ordenes}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            /> 
        </View>
    )
}
export default Ordenes