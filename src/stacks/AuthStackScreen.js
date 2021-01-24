import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'


export default AuthStackScreen = () => {

    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        </AuthStack.Navigator>
    )
}
