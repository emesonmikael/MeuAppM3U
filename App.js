// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import VideoList from './src/components/VideoList';
import VideoPlayer from './src/screens/VideoPlayer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VideoList">
        <Stack.Screen 
          name="VideoList" 
          component={VideoList} 
          options={{ title: 'Lista de Vídeos' }} 
        />
        <Stack.Screen 
          name="VideoPlayer" 
          component={VideoPlayer} 
          options={{ title: 'Reprodutor' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;