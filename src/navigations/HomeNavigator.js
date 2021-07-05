import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

const Contacts = () => {
  return (
    <View>
      <Text>Hello from Contacts Screen</Text>
    </View>
  );
};
const ContactDetails = () => {
  return (
    <View>
      <Text>Hello from ContactDetails Screen</Text>
    </View>
  );
};
const CreateContact = () => {
  return (
    <View>
      <Text>Hello from CreateContact Screen</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View>
      <Text>Hello from Settings Screen</Text>
    </View>
  );
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Conatacts">
      <HomeStack.Screen name="Conatacts" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen name="Conatact Details" component={ContactDetails}></HomeStack.Screen>
      <HomeStack.Screen name="Create Contacts" component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
