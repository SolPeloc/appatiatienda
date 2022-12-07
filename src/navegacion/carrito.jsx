import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Carrito } from "../screens";

const Stack = createNativeStackNavigator()

const CarritoNavegacion = () => {
    return(
        <Stack.Navigator 
        initialRouteName="Categorias"
        screenOptions={{
            headerStyle: {
                backgroundColor: esANDROID? COLORES.fondoClaro : COLORES.gris
            },
            headerTintColor: COLORES.texto,
            headerTitleStyle: {
                fontFamily: "poppins-bold"
            },
            presentation: "card",
            headerBackTitle:""
        }}
        >
            </Stack.Navigator>
    )
}