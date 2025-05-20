import React from 'react';
import { View, Text, StyleSheet, Image,ScrollView    } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.head}>
                <Text style={styles.name}>Newsletter</Text>
            </View>
            <View style={styles.headtext}>
                <Text style={styles.nametext}>Stay update with our curated selection of top newsletters</Text>
            </View>
             <View style={styles.topics}> 
                
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
                    <View style={styles.card}>
                        <Text >Business</Text>                                                                                                    
                    </View>
                     <View style={styles.card}>
                        <Text >Education</Text>                                                                                                    
                    </View>
                     <View style={styles.card}>
                        <Text >Health</Text>                                                                                                    
                    </View>
                     <View style={styles.card}>
                        <Text >Science</Text>                                                                                                    
                    </View>
                     <View style={styles.card}>
                        <Text >Sports</Text>                                                                                                    
                    </View>
                     <View style={styles.card}>
                        <Text >Entertainment</Text>                                                                                                    
                    </View>
                </ScrollView>
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
        backgroundColor: '#ffffff',
    },
    headtext: {
        marginRight: 20,
        padding: 5,
        backgroundColor: '#ffffff',
    },
    nametext: {
        fontSize: 15,
        marginLeft: 20,
    },
    card: {
        flex: 1,
        backgroundColor: '#B8D2FF',
        padding: 8,
        margin: 2,
        fontSize: 15,
        width: 100,
        textAlign: 'center',
    },
    topics: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#ffffff',
    },

});

export default HomeScreen;