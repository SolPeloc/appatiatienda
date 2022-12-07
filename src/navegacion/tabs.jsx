import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TiendaNavegacion from "./tienda"

const BottomTab = createBottomTabNavigator()

const Tabs = () =>{
    return(
        <BottomTab.Navigator
        initialRouteName="Tiendatab"
        screenOptions={{
            headerShown:false
        }}>
            <BottomTab.Screen
            name="Tiendatab"
            component={TiendaNavegacion}/>    
        </BottomTab.Navigator>
    )
}
export default Tabs