import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Promotion } from '../screens/Promotion';

const Stack = createStackNavigator();

export const Navigation: FC<{}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Promotion" component={Promotion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
