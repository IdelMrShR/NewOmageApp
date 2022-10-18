import React from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';


export const HomeImages = ({source, id, fullScreen}) => {
    return (
        <View style={styles.imageBox}>
            <Pressable onPress={fullScreen.bind(this, source, id)}>
                <Image
                    style={styles.image}
                    source={{uri: source,}}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBox:{
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 300,
        width: '80%',
    },
    image:{
        width: 400,
        maxWidth: window.innerWidth,
        height: 280,
        maxHeight: window.innerHeight,
        borderRadius: 10,
    },
})