import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import { useSelector } from "react-redux"


const screenWidth = Dimensions.get("window").width 

const Data = props => {
    const colors = useSelector(state => state.colors)

    // Define Image - temporary implementation
    const image = () => (
        <Image 
            style={styles.image}
            source={require("../assets/postimages/daniel-post.jpg")} 
        /> 
    )

    // Define device 
    const device  = () => {
        switch(props.device) {
            case "apple":
                return (
                    <Image 
                        style={styles.apple}
                        source={require("../assets/fitnesstrackers/apple-watch.png")} 
                    /> 
                )
            case "gearfit": 
                return (
                    <Image 
                        style={styles.gearfit}
                        source={require("../assets/fitnesstrackers/samsung-gear-fit.png")} 
                    /> 
                )
            case "fitbit": 
                return (
                    <Image 
                        style={styles.fitbit}
                        source={require("../assets/fitnesstrackers/fitbit.png")} 
                    /> 
                )
            default:
                return null
        }
    }

    // Define icon 
    const icon  = () => {
        switch(props.icon) {
            case "bike":
                return (
                    <MaterialIcons 
                        name="directions-bike" 
                        size={48}
                        color={colors.fitnessGreen}
                    />
                )
            case "swim": 
                return (
                    <MaterialCommunityIcons 
                        name="swim" 
                        size={56}
                        color={colors.fitnessGreen}
                    />
                )
            case "yoga": 
                return (
                    <Image 
                        style={{width: 50, height: 50,}}
                        source={require("../assets/icons/yoga.png")} 
                    /> 
                )
            default:
                return null
        }
    }

    return (
        <TouchableOpacity>
            { props.image ? 
                image() :
                null
            }
            <View style={styles.mainPanel}>
                <View style={styles.topPanel}>
                    {icon()}
                    <View style={styles.description}>
                        <Text style={styles.type}>{props.workoutType}</Text>
                        {device()}
                    </View>
                </View>
                <View style={styles.bottomPanel}>
                    <View>
                        <Text style={styles.insight}>Total Time</Text>
                        <Text style={[{color: colors.orange}, styles.data]}>{props.time}</Text>
                    </View>
                    <View>
                        <Text style={styles.insight}>Total Calories</Text>
                        <Text style={[{color: colors.purple}, styles.data]}>{props.calories}</Text>
                    </View>
                    { props.distance ?
                        <View>
                            <Text style={styles.insight}>Distance</Text>
                            <Text style={[{color: colors.lightblue}, styles.data]}>{props.distance}</Text>
                        </View> :
                        <View>
                            <Text style={styles.insight}>Av.Heart Rate</Text>
                            <Text style={[{color: colors.lightblue}, styles.data]}>{props.heart}</Text>
                        </View>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainPanel: {
        flexDirection: "column",
        paddingHorizontal: 8,
    },
    topPanel: {
        flexDirection: "row",
        marginBottom: 10,
    },
    description: {
        flexDirection: "column",
        marginLeft: 8,
    },
    type: {
        fontSize: 30,
        fontFamily: "Apple SD Gothic Neo",
    },
    bottomPanel: {
        flexDirection: "row",
        justifyContent: "space-between",
    }, 
    image: {
        width: screenWidth, 
        height: 360,
        marginBottom: 5,
    },
    apple: {
 
        height: 10,
        width: 50,
    },
    gearfit: {
        position: "relative",
        bottom: 3,
        height: 10,
        width: 71,
    },
    fitbit: {
        position: "relative",
        bottom: 1,
        height: 12,
        width: 45,
    },
    insight: {
        fontSize: 18,
        fontFamily: "Zapf Dingbats"
    },
    data: {
        fontSize: 22,
        fontWeight: "600",
        marginTop: 5,

    },
})
 

export default Data