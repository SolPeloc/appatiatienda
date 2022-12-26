import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Autenticacion } from "../screens";
const Stack = createNativeStackNavigator()

const AutenticacionNavegacion = () => {
        return (
            <Stack.Navigator initialRouteName="Autenticacion" screenOptions={{headerShown:false}}>
                <Stack.Screen
                name="Autenticacion"
                component={Autenticacion}
                />     
            </Stack.Navigator>
        )
}
export default AutenticacionNavegacion