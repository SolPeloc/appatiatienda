import React from "react";
import { View,Text,Image, Button } from "react-native";
import { styles } from "./styles";
import { useSelector,useDispatch } from "react-redux";
import { añadirAlCarrito } from "../../store/acciones/carrito.accion";
import { COLORES } from "../../constantes/temas";
const Producto = ({navigation}) =>{
    const despachador = useDispatch()
    const producto = useSelector((state) => state.productos.productoSeleccionado)
    const enAñadirAlCarrito = () =>{despachador(añadirAlCarrito(producto))}
    const {titulo,precio,descripcion,imagen}= producto || {}
        return (
            <View style={styles.container}>
                <Image source={imagen} style={styles.imagen}/>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text>{descripcion}</Text>
                <Text style={styles.titulo}>${precio}</Text>
                <Button
                    title="Agregar al carrito"
                    onPress={enAñadirAlCarrito}
                    color={COLORES.negro}
                />
            </View>
        )
}
export default Producto