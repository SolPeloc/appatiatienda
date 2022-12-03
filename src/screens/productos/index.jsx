import React from "react";
import { styles } from "./styles";
import { View,Text, Button } from "react-native";
import { Colores } from "../../constantes/temas";
const Productos = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Productos</Text>
            <Button
                title="Ir a Producto"
                color={Colores.negro}
                onPress={()=>navigation.navigate("Producto")}
                />
        </View>
    )
}

export default Productos