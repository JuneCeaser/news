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
                        <Text style={styles.cardText}>Business</Text>                                                                                                    
                    </View>
                     <View style={styles.card}>
                        <Text style={styles.cardText}>Education</Text>                                                                                                    
                    </View>
                     <View style={styles.card}>
                        <Text style={styles.cardText}>Health</Text>                                                                                                    
                    </View>
                     <View style={styles.card}>
                        <Text style={styles.cardText} >Science</Text>                                                                                                    
                    </View>
                     <View style={styles.card}>
                        <Text style={styles.cardText}>Sports</Text>                                                                                                    
                    </View>
                     <View style={styles.card}>
                        <Text style={styles.cardText}>Entertainment</Text>                                                                                                    
                    </View>
                </ScrollView>
             </View>
             <View style={styles.newscardlist}>
                  <ScrollView >
                     <View style={styles.newscard}>
                        <View style={styles.imageContainer}><Image source={require('../../images/newsletter.jpg')} style={{ width: 350, height: 300 }} /></View>
                        <Text style={styles.title}>Newsletter Title</Text>
                        <Text style={styles.date}>05/20/2025</Text>
                        <Text style={styles.description}>Daily finance news, market trends,and invesment tips from industry experts</Text>
                    </View>
                      <View style={styles.newscard}>
                        <View style={styles.imageContainer}><Image source={require('../../images/newsletter.jpg')} style={{ width: 350, height: 300 }} /></View>
                        <Text style={styles.title}>Newsletter Title</Text>
                        <Text style={styles.date}>05/20/2025</Text>
                        <Text style={styles.description}>Daily finance news, market trends,and invesment tips from industry experts</Text>
                    </View>
                       <View style={styles.newscard}>
                        <View style={styles.imageContainer}><Image source={require('../../images/newsletter.jpg')} style={{ width: 350, height: 300 }} /></View>
                        <Text style={styles.title}>Newsletter Title</Text>
                        <Text style={styles.date}>05/20/2025</Text>
                        <Text style={styles.description}>Daily finance news, market trends,and invesment tips from industry experts</Text>
                    </View>
                     <View style={styles.newscard}>
                        <View style={styles.imageContainer}><Image source={require('../../images/newsletter.jpg')} style={{ width: 350, height: 300 }} /></View>
                        <Text style={styles.title}>Newsletter Title</Text>
                        <Text style={styles.date}>05/20/2025</Text>
                        <Text style={styles.description}>Daily finance news, market trends,and invesment tips from industry experts</Text>
                    </View>
                     <View style={styles.newscard}>
                        <View style={styles.imageContainer}><Image source={require('../../images/newsletter.jpg')} style={{ width: 350, height: 300 }} /></View>
                        <Text style={styles.title}>Newsletter Title</Text>
                        <Text style={styles.date}>05/20/2025</Text>
                        <Text style={styles.description}>Daily finance news, market trends,and invesment tips from industry experts</Text>
                    </View>
                       <View style={styles.newscard}>
                        <View style={styles.imageContainer}><Image source={require('../../images/newsletter.jpg')} style={{ width: 350, height: 300 }} /></View>
                        <Text style={styles.title}>Newsletter Title</Text>
                        <Text style={styles.date}>05/20/2025</Text>
                        <Text style={styles.description}>Daily finance news, market trends,and invesment tips from industry experts</Text>
                    </View>
                       <View style={styles.newscard}>
                        <View style={styles.imageContainer}><Image source={require('../../images/newsletter.jpg')} style={{ width: 350, height: 300 }} /></View>
                        <Text style={styles.title}>Newsletter Title</Text>
                        <Text style={styles.date}>05/20/2025</Text>
                        <Text style={styles.description}>Daily finance news, market trends,and invesment tips from industry experts</Text>
                    </View>
                    <View style={styles.newscard}>
                        <View style={styles.imageContainer}><Image source={require('../../images/newsletter.jpg')} style={{ width: 350, height: 300 }} /></View>
                        <Text style={styles.title}>Newsletter Title</Text>
                        <Text style={styles.date}>05/20/2025</Text>
                        <Text style={styles.description}>Daily finance news, market trends,and invesment tips from industry experts</Text>
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
        marginLeft: 15,
    },
    head: {
        padding: 5,
        backgroundColor: '#ffffff',
    },
    headtext: {
        marginRight: 20,
        backgroundColor: '#ffffff',
    },
    nametext: {
        fontSize: 15,
        marginLeft: 20,
    },
    card: {
        flex: 1,
        backgroundColor: '#B8D2FF',
        padding: 4,
       marginHorizontal: 4,
        fontSize: 17,
        textAlign: 'center',
    },
    cardText: {
        fontSize: 15,
        color: '#000',
        paddingHorizontal:7,
    },
    topics: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#ffffff',
    },
    newscardlist: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 150,
        backgroundColor: '#ffffff',
    },
    newscard: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 8,
        margin: 10,
        
        fontSize: 15,
        width: 350,
        textAlign: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 15,
        color: '#555',
    },

});

export default HomeScreen;