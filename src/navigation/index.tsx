import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dish, DishesList} from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="DishesList"
            component={DishesList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dish"
            component={Dish}
            options={({route}) => ({
              title: route?.params?.name,
              headerTitleAlign: 'center',
            })}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;
