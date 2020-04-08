import React from 'react'
import { View, Button, StyleSheet, Image, Dimensions } from 'react-native'
import { useDispatch } from "react-redux"

import { loginUser } from "../redux/actions"


const screenWidth = Dimensions.get("screen").width 

const LoginScreen = () => {
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(loginUser())
    }

    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/logo/logo-green.png")} 
            /> 
            <Button 
                title="Log In"
                onPress={handleLogin}
                color="#0CB128"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: screenWidth * .8,
        height: 319,
        transform: [{ rotate: "130deg" }],
        position: "relative",
        top: 12,
        position: "absolute",
    }
})


export default LoginScreen