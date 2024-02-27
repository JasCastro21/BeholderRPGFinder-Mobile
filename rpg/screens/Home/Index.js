import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av';

export const Home = () => {
    return (
        <View style={styles.container}>
            
            <Video
                source={require('../../img/rpg.mp4')} 
                style={styles.backgroundVideo}
                isMuted={true}
                shouldPlay={true}
                isLooping
                resizeMode="cover"
            />

            
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../img/Logo.png')} 
                    style={styles.logo}
                />
            </View>

            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Inscrever</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20, 
        marginBottom: 50, 
    },
    logo: {
        width: 100, 
        height: 100, 
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'transparent',
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginVertical: 5,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#8B0000',
        width: 330,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
