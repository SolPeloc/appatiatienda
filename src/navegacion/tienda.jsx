import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Categorias, Producto,Productos} from"../screens"
import { COLORES} from "../constantes/temas";
import { esANDROID } from "../utilidades"

const Stack = createNativeStackNavigator()

const TiendaNavegacion = () =>{
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
            
            <Stack.Screen 
            name="Categorias" 
            component={Categorias}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen 
            name="Productos" 
            component={Productos}
            options={({ route }) => ({
                title: route.params.titulo,
              })}
            
            />
            <Stack.Screen 
            name="Producto" 
            component={Producto}
            options={({route}) => ({
                title: route.params.titulo
                
            })}
            />
        </Stack.Navigator>
    )
}

export default TiendaNavegacion