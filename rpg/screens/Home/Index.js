import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export const Home = () => {
    return (
        <View style={styles.container}>
            
            
            <ImageBackground
                source={require('../../img/Fundo.png')} 
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                
                <View style={styles.content}>
                   
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Inscrever</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%', 
        height: '100%', 
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        alignItems: 'center',
        paddingBottom: 20, 
        marginBottom: 50, 
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
        color: '#8B0000',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
