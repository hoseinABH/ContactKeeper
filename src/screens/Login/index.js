import React from 'react';

// components
import {Text} from 'react-native';
import Container from '../../components/Container';
import Input from '../../components/Input';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <Container>
      <Text>Hello from Login Screen</Text>
      <Input
        label="Username"
        onChangeText={onChangeText}
        value={text}
        icon={<Text>❤</Text>}
        error="this field is required"
      />
      <Input
        label="Password"
        onChangeText={onChangeText}
        iconPosition="right"
        value={text}
        icon={<Text>❤</Text>}
      />
    </Container>
  );
};

export default Login;
