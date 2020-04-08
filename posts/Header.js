import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import { useSelector } from "react-redux"


const Header = props => {
    const colors = useSelector(state => state.colors)

    // Define Image - temporary implementation
    const correctProfilePic = () => {
        if (props.id == 0) {
            return (
                <Image 
                    style={styles.image}
                    source={require("../assets/profilepics/lindsay.jpg")} 
                /> 
            )
        } else if (props.id == 1) {
            return (
                <Image 
                    style={styles.image}
                    source={require("../assets/profilepics/daniel.png")} 
                /> 
            )
        } else if (props.id == 2)  {
            return (
                <Image 
                    style={styles.image}
                    source={require("../assets/profilepics/greta.jpg")} 
                /> 
            )
        }
    }

    return (
        <View style={styles.mainBox}>
            <TouchableOpacity style={styles.leftSection}>
                {correctProfilePic()}
                <View style={styles.nameTime}>
                    <View style={styles.verified}>
                        <Text style={styles.name}>{props.name}</Text>
                        { props.verified ? 
                            <Ionicons 
                                name="md-checkbox" 
                                size={15} 
                                color={colors.fitnessGreen }
                                style={styles.check} /> :
                            null
                        }
                    </View>
                    <Text style={[{color: colors.inactiveGrey}, styles.time]}>{props.time}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightSection}>
                <Ionicons name="md-pin" size={10} color={colors.inactiveGrey}/>
                <Text style={[{color: colors.inactiveGrey}, styles.location]}>{props.location}</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    mainBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8,
    },
    // Header Left
    leftSection: {
        flexDirection: "row",
    }, 
    image: {
        width: 43, 
        height: 43,
        borderRadius: 100,
    },
    nameTime: {
        flexDirection: "column",
        marginLeft: 4,

    }, 
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 4,
        marginTop: 4,
        fontFamily: "Zapf Dingbats"
    },
    verified: {
        flexDirection: "row",
    },
    check: {
        marginTop: 4,
        paddingTop: 2,
    },
    time: {
        fontSize: 10,
        fontFamily: "Helvetica Neue"
    },
    // Header Right
    rightSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    location: {
        fontSize: 10,
        marginLeft: 2,
        fontFamily: "Helvetica Neue",
    },
})

 
export default Header