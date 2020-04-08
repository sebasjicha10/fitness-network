import React from 'react'
import { View, StyleSheet } from 'react-native'
import Posts from "../posts/Posts"


const HomeScreen = () => {
    return (
        <View style={styles.container}> 
            <Posts />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    logo: {

    }
})


export default HomeScreen