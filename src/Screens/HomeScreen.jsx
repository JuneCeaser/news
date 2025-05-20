import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.name}>Newsletter</Text>
            </View>
            <View style={styles.headtext}>
                <Text style={styles.nametext}>Stay update with our curated selection of top newsletters</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    name: {
        fontFamily: 'Kaisei HarunoUmi',
        fontSize: 35,
        marginLeft: 20,
    },
    head: {
        padding: 10,
        backgroundColor: '#B8D2FF',
    },
    headtext: {
        marginRight: 20,
        padding: 5,
        backgroundColor: '#FFBFF2',
    },
    nametext: {
        fontSize: 15,
        marginLeft: 20,
    },

});

export default HomeScreen;