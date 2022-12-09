import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Carrito } from "../screens";
import {COLORES} from "../constantes/temas"
import { esANDROID } from "../utilidades";
const Stack = createNativeStackNavigator()

const CarritoNavegacion = () => {
    return(
        <Stack.Navigator 
        initialRouteName="Carrito"
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
           <Stack.Screen
              name="Carrito"
              component={Carrito}
              />
            </Stack.Navigator>
    )
}
export default CarritoNavegacion