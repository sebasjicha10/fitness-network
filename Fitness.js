import React from "react"
import { StyleSheet, StatusBar, Image } from "react-native"
import { useSelector } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import ShareScreen from "./screens/ShareScreen"
import ProfileScreen from "./screens/ProfileScreen"
import WorkoutScreen from "./screens/WorkoutScreen"


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

StatusBar.setBarStyle('dark-content', true)

const Fitness = () => {
    const logged = useSelector(state => state.logged)
    const colors = useSelector(state => state.colors)

    // Logo on the Header
    const ArrowLogo = () => {
        return (
            <Image 
                style={styles.logo}
                source={require("./assets/logo/logo-green.png")} 
            /> 
        )
    }

    // Home Feed Stack
    const HomeFeed = () => {
        return (
            <Stack.Navigator initialRouteName="Feed">
                <Stack.Screen 
                    name="Feed" 
                    component={HomeScreen}
                    options={{ headerTitle: props => <ArrowLogo {...props} /> }}
                />
                <Stack.Screen 
                    name="Workout" 
                    component={WorkoutScreen}
                />
            </Stack.Navigator>
        )
    }
    
    // Main Applications Tabs
    const Tabs = () => {
        return (
            <NavigationContainer style={styles.container}>
                <Tab.Navigator
                    screenOptions={TabStyling}
                    tabBarOptions={{ 
                        activeTintColor: colors.fitnessGreen, 
                        inactiveTintColor: colors.inactiveGrey,
                        showLabel: false,
                    }}
                >
                    <Tab.Screen name="Home" component={HomeFeed} />
                    <Tab.Screen name="Share" component={ShareScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }

    return (
        logged ?
            <Tabs /> :
            <LoginScreen />
    )
}

// Tab Bar styling
const TabStyling = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Home") {
            iconName = focused
                ? "home"
                : "home";
        } else if (route.name === 'Share') {
            iconName = focused ? 'run' : 'run';
        } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account';
        }
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    logo: {
        width: 72,
        height: 80,
        transform: [{ rotate: "130deg" }],
        position: "relative",
        top: 12,
    }
});


export default Fitness
