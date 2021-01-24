import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import HomeScreen from '../screens/HomeScreen'
import MessageScreen from '../screens/MessageScreen'
import NotificationScreen from '../screens/NotificationScreen'
import ProfileScreen from '../screens/ProfileScreen'
import PostScreen from '../screens/PostScreen'


export default MainStackScreen = () => {

    const MainStack = createBottomTabNavigator();

    const tabBarOptions = {
        showLabel: false,
        style: {
            paddingBottom: 12
        }
    }

    const screenOptions = (({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName = "home";

            switch (route.name) {
                case "Home":
                    iconName = "home"
                    break;

                case "Message":
                    iconName = "chatboxes"
                    break;

                case "Notification":
                    iconName = "notifications"
                    break;

                case "Profile":
                    iconName = "person"
                    break;

                default:
                    iconName = "home"
            }

            if (route.name === "Posts") {
                return (
                    <Icon name="add-circle" size={48} color="#23a8d9"
                         />
                );
            }

            return <Icon name={iconName} size={24} color={focused ? "#000000" : "#666666"} />
        }
    }))


    const screenOptions2 = ({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName = "home";

            switch (route.name) {
                case "Home":
                    iconName = "home"
                    break;

                case "Message":
                    iconName = "chatboxes"
                    break;

                case "Notification":
                    iconName = "notifications"
                    break;

                case "Profile":
                    iconName = "person"
                    break;

                default:
                    iconName = "home"
            }

            if (route.name === "Posts") {
                return (
                    <Icon name="add-circle" size={48} color="#23a8d9"
                         />
                );
            }

            return <Icon name={iconName} size={24} color={focused ? "#000000" : "#666666"} />
        }
    })


    return (
        <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Message" component={MessageScreen} />
            <MainStack.Screen name="Posts" component={PostScreen} />
            <MainStack.Screen name="Notification" component={NotificationScreen} />
            <MainStack.Screen name="Profile" component={ProfileScreen} />
            
        </MainStack.Navigator>
    )
}