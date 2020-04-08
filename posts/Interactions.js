import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useSelector } from "react-redux"

const screenWidth = Dimensions.get("screen").width 

const Interactions = props => {
    const colors = useSelector(state => state.colors)

    // Handle whether a post is liked or not
    const handleLikes = () => {
        if (props.liked) {
            return (
                <MaterialCommunityIcons name="heart" size={25} color={colors.fitnessOrange}/>
            )
        } else {
            return (
                <MaterialCommunityIcons name="heart-outline" size={25} color={colors.inactiveGrey}/>
            )
        }

    }

    return (
        <View style={styles.interactionSection}>
            { props.caption ?
                <Text style={styles.caption}>{props.caption}</Text> :
                null
            }
            
            <View style={styles.buttons}>
                <View style={styles.likes}>
                    <TouchableOpacity>{handleLikes()}</TouchableOpacity>
                    <TouchableOpacity><Text style={[{color: colors.inactiveGrey}, styles.info]}>{props.likes} likes</Text></TouchableOpacity>
                </View>
                <View style={styles.comments}>
                    <TouchableOpacity><MaterialCommunityIcons name="comment-outline" size={25} color={colors.inactiveGrey}/></TouchableOpacity>
                    <TouchableOpacity><Text style={[{color: colors.inactiveGrey}, styles.info]}>{props.comments} comments</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    interactionSection: {
        marginTop: 10,
        paddingHorizontal: 8,
        borderBottomColor: "#E1D5D5",
        borderBottomWidth: 0.3,
        paddingBottom: 15,
    },
    buttons: {
        flexDirection: "row",
        width: screenWidth * .4,  
    }, 
    info: {
        fontSize: 10,
        position: "relative",
        bottom: 4,
    },
    comments: {
        fontFamily: "Helvetica Neue",
    }, 
    caption: {
        fontSize: 14,
        fontFamily: "Helvetica Neue",
        marginBottom: 10,
    },
    likes: {
        width: screenWidth * .17,
        fontFamily: "Helvetica Neue",
    }
})

 
export default Interactions