import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                
                <View style={styles.profileSection}>
                    <View style={styles.profileImageContainer}>
                        <View style={styles.profileImagePlaceholder}>
                            <Icon name="" size={24} color="#666" />
                        </View>
                        <TouchableOpacity style={styles.cameraButton}>
                            <Icon name="" size={16} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.changePhotoText}>Tap to change profile picture</Text>
                </View>

              
                <View style={styles.fieldSection}>
                    <Text style={styles.fieldLabel}>Name</Text>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldValue}>John Doe</Text>
                    </View>
                </View>

        
                <View style={styles.fieldSection}>
                    <Text style={styles.fieldLabel}>E mail</Text>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.fieldValue}>jcdsoysa@gmail.com</Text>
                    </View>
                </View>

             
                <View style={styles.fieldSection}>
                    <TouchableOpacity style={styles.moreOptionContainer}>
                        <Text style={styles.moreOptionText}>More option</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    profileImageContainer: {
        position: 'relative',
        marginBottom: 12,
    },
    profileImagePlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    changePhotoText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    fieldSection: {
        marginBottom: 30,
    },
    fieldLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    fieldContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingBottom: 8,
    },
    fieldValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: '400',
    },
    moreOptionContainer: {
        paddingVertical: 4,
    },
    moreOptionText: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '400',
    },
    bottomLine: {
        height: 4,
        backgroundColor: '#007AFF',
        marginTop: 'auto',
    },
});

export default ProfileScreen;