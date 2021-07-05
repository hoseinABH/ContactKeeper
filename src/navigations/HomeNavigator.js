import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';

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
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
