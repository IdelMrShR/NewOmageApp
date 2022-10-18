import React from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';


export const ImageScreen = ({source, id, homeScreen}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <Pressable onPress={homeScreen}>
                    <Image
                        style={styles.image}
                        source={{uri: source,}}
                    />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBox:{
        margin: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    image:{
        width: 400,
        maxWidth: window.innerWidth,
        height: 580,
        borderRadius: 10,
    },
    container: {
        flex:1,
        backgroundColor: '#333'
    },
})