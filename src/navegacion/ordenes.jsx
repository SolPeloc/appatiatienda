import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ordenes } from "../screens";
import { COLORES } from "../constantes/temas";
import { esANDROID } from "../utilidades";
const Stack = createNativeStackNavigator()

const OrdenNavegacion = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Ordenes"
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
                name="Ordenes"
                component={Ordenes}
            /> 
        </Stack.Navigator>
    )
}
export default OrdenNavegacion