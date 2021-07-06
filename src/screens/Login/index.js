import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
// components
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Input from '../../components/Input';
import colors from '../../assets/theme/colors';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        width={70}
        height={70}
        style={styles.logoImage}
      />
      <Input
        label="Username"
        placeholder="Enter Username"
        onChangeText={onChangeText}
        value={text}
      />
      <Input
        label="Password"
        onChangeText={onChangeText}
        iconPosition="right"
        secureTextEntryds
        value={text}
        placeholder="Enter Your Password"
      />
      <Button title="Submit" color="primary" />

      <View style={styles.registerSection}>
        <Text style={styles.infoText}>Need a new account?</Text>
        <TouchableOpacity onPress={() => navigate(REGISTER)}>
          <Text style={styles.linkButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    marginTop: 50,
  },
  registerSection: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  infoText: {
    paddingRight: 5,
    fontSize: 15,
  },
  linkButton: {
    color: colors.primary,
  },
});

export default Login;
