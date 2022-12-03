import React from "react";
import { styles } from "./styles";
import { View,Text, Button } from "react-native";
import { Colores } from "../../constantes/temas";
const Categorias = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Categorias</Text>
            <Button
                title="Ir a Productos"
                color={Colores.negro}
                onPress={() => navigation.navigate("Productos")}
             />
        </View>
    )
}

export default Categorias