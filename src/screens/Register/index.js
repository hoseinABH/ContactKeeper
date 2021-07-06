import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';

// components
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Input from '../../components/Input';
import colors from '../../assets/theme/colors';

const Register = () => {
  const {navigate} = useNavigation();
  const [form, setForm] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const changeTextHandler = ({name, value}) => {
    if (value !== '') {
      setErrors(prev => ({...prev, [name]: null}));
    }
    setForm({...form, [name]: value});
  };

  const submitFormHandler = () => {
    console.log(form);
    if (!form.userName) {
      setErrors(prev => ({...prev, userName: 'Please add a username'}));
    }
    if (!form.firstName) {
      setErrors(prev => ({...prev, firstName: 'Please add a first name'}));
    }
    if (!form.lastName) {
      setErrors(prev => ({...prev, lastName: 'Please add a last name'}));
    }
    if (!form.email) {
      setErrors(prev => ({...prev, email: 'Please add a email'}));
    }
    if (!form.password) {
      setErrors(prev => ({...prev, password: 'Please add a password'}));
    }
  };
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        width={70}
        height={70}
        style={styles.logoImage}
      />
      <Input
        error={errors.userName}
        label="Username"
        placeholder="Enter Username"
        onChangeText={value => changeTextHandler({name: 'userName', value})}
      />
      <Input
        error={errors.firstName}
        label="First name"
        placeholder="Enter First name"
        onChangeText={value => changeTextHandler({name: 'firstName', value})}
      />
      <Input
        error={errors.lastName}
        label="Last name"
        placeholder="Enter Last name"
        onChangeText={value => changeTextHandler({name: 'lastName', value})}
      />
      <Input
        error={errors.email}
        label="Email"
        placeholder="Enter Your Email"
        onChangeText={value => changeTextHandler({name: 'email', value})}
      />
      <Input
        error={errors.password}
        label="Password"
        onChangeText={value => changeTextHandler({name: 'password', value})}
        iconPosition="right"
        secureTextEntryd
        placeholder="Enter Your Password"
      />
      <Button title="Submit" color="primary" onPress={submitFormHandler} />

      <View style={styles.registerSection}>
        <Text style={styles.infoText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate(LOGIN)}>
          <Text style={styles.linkButton}>Login</Text>
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

export default Register;
