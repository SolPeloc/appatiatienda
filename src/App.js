
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { StyleSheet } from 'react-native';
import AppNavigator from './navegacion';
import { Provider } from 'react-redux';
import store from './store';
export default function App() {
const [loaded] = useFonts({
  "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
   "poppins-bold" : require("../assets/fonts/Poppins-Bold.ttf"),
   "poppins-italic" : require("../assets/fonts/Poppins-Italic.ttf"),
})
if (!loaded){
  return(
      <View style= {styles.container}> 
      <ActivityIndicator size="large" color= "black"/>
    </View>
  )
}
  return (
        <Provider store={store}>
          <AppNavigator/>
        </Provider>

   )
   
    
} 


const styles = StyleSheet.create({
     container:{
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
     }
})