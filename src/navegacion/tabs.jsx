import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TiendaNavegacion from "./tienda"
import CarritoNavegacion from "./carrito";
import OrdenNavegacion from "./ordenes";
import {Ionicons} from "@expo/vector-icons"
import { COLORES } from "../constantes/temas";
import { esANDROID } from "../utilidades";
import { useSelector } from "react-redux";
const BottomTab = createBottomTabNavigator()

const Tabs = () =>{
    const carrito = useSelector((estado) => estado.carrito.items)
    return(
        <BottomTab.Navigator
        initialRouteName="Tiendatab"
        screenOptions={{
            headerShown:false,
            tabBarLabelStyle:{
                fontFamily:"poppins-bold",
                fontSize:12
            },
            tabBarActiveTintColor:COLORES.texto,
            tabBarInactiveTintColor: COLORES.fondo,
            tabBarStyle:{
                padding: esANDROID ? 8 : 0,
            }
        }}>
            <BottomTab.Screen
            name="Tiendatab"
            component={TiendaNavegacion}
            options={{
                title:"Tienda",
                tabBarIcon:({focused }) =>(
                    <Ionicons name={focused? "home" : "home-outline"}
                     size={22}
                     color={COLORES.negro}
                    />
                )
            }}
            /> 
            <BottomTab.Screen
            name="CarritoTab"
            component={CarritoNavegacion}
            options={{
                title:"Carrito",
                tabBarIcon:({focused }) =>(
                    <Ionicons name={focused? "cart" : "cart-outline"}
                     size={22}
                     color={COLORES.negro}
                    />
                ),
                tabBarBadge:carrito.length === 0 ? null : carrito.length,
                tabBarBadgeStyle:{
                    backgroundColor: COLORES.gris,
                    color:COLORES.blanco,
                    fontSize: 14
                }
            }}
            /> 
            <BottomTab.Screen
            name="OrdenesTab"
            component={OrdenNavegacion}
            options={{
                title:"Ordenes",
                tabBarIcon:({focused }) =>(
                    <Ionicons name={focused? "file-tray" : "file-tray-outline"}
                     size={22}
                     color={COLORES.negro}
                    />
                )
            }}
            />  
        </BottomTab.Navigator>
    )
}
export default Tabs