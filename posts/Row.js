import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Header from "./Header"
import Data from "./Data"
import Interactions from "./Interactions"


const Row = props => (
    <View>
        <Header
            picture={props.picture}
            name={props.name}
            time={props.time}
            location={props.location}
            verified={props.verified}
            id={props.postID}
        />
        <Data
            image={props.image}
            icon={props.icon}
            workoutType={props.workoutType}
            device={props.fitnessTracker}
            time={props.totalTime}
            calories={props.totalCalories}
            distance={props.distance}
            heart={props.heartRate}
        />
        <Interactions
            caption={props.caption}
            likes={props.likes}
            liked={props.liked}
            comments={props.comments}
        />
    </View>
)

 
export default Row