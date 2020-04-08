import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


const ProfileScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Manage your profile</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        color: "#0CB128"
    }
})
 
export default ProfileScreen