import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { UserProvider } from './src/context/UserContext'
import { FirebaseProvider } from './src/context/FirebaseContext'


import AppStackScreen from './src/stacks/AppStackScreen'

export default App = () => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <NavigationContainer>
          <AppStackScreen />
        </NavigationContainer>
      </UserProvider>
    </FirebaseProvider>
  )
}