import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'

import {UserContext} from '../context/UserContext'

import AuthStackScreen from './AuthStackScreen'
import MainStackScreen from './MainStackScreen'
import LoadingScreen from '../screens/LoadingScreen'


export default AppStackScreen = () => {

    const AppStack = createStackNavigator()
    const [user] = useContext(UserContext)

    return (
        <AppStack.Navigator headerMode="none">
            {user.isLoggedIn === null ?
                (
                    <AppStack.Screen name="Loading" component={LoadingScreen} />
                ) : user.isLoggedIn ? 
                (
                    <AppStack.Screen name="Main" component={MainStackScreen} />

                ) :
                (
                    <AppStack.Screen name="Auth" component={AuthStackScreen} />

                )
            }
        </AppStack.Navigator>
    )
}
