import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {HomeImages} from './src/Image'
import {ImageScreen} from './src/ImageScreen'
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native';


const Stack = createStackNavigator()


export default function App() {

    return (
        //<NavigationContainer>
            //<Stack.Navigator>
        <Stack.Screen name='Image App' component={HomeScreen}/>,
        <Stack.Screen name='Image' component={currentImageScreen}/>
            //</Stack.Navigator>
        //</NavigationContainer>
    );
}

const HomeScreen = ({ navigation }) =>{
    const [images, setImages] = React.useState([])

    const loadDB = () => {
        fetch('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
            .then(res => res.json())
            .then(json => setImages(json))
            .catch(err => console.log('Error: ', err))
    }

    loadDB()

    const fullScreen = (source, id) => {
        navigation.navigate('Image', {source})
    }

    const imgs = images.map(img => {
        return <HomeImages source={img.urls.regular} id={img.id} fullScreen={fullScreen} key={img.id}/>
    })

    return(
    <View style={styles.container}>
        <ScrollView>
            {imgs}
        </ScrollView>
        <StatusBar style="auto" />
    </View>
    );
    }

    const currentImageScreen = ({ route, navigation }) =>{
        const { source, id } = route.params
        const homeScreen = () =>{
            navigation.navigate('Image App', {})
        }
    return(
        <ImageScreen source={source} id={id} homeScreen={homeScreen} key={id}/>
    );
    }

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#333'
  },

});
