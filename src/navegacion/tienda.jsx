import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Categorias, Producto,Productos} from"../screens"
import { Colores } from "../constantes/temas";
const Stack = createNativeStackNavigator()

const TiendaNavegacion = () =>{
    return(
        <Stack.Navigator 
            initialRouteName="Categorias"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colores.fondoClaro
                },
                headerTintColor: Colores.texto,
                headerTitleStyle: {
                    fontFamily: "poppins-bold"
                }
            }}
            >
            
            <Stack.Screen 
            name="Categorias" 
            component={Categorias}
            options={{
                headerShown:true
            }}
            />
            <Stack.Screen 
            name="Productos" 
            component={Productos}
            />
            <Stack.Screen 
            name="Producto" 
            component={Producto}
            />
        </Stack.Navigator>
    )
}

export default TiendaNavegacion