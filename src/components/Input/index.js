import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const Input = ({style, iconPosition = 'left', icon, label, ...rest}) => {
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else {
        return 'row-reverse';
      }
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View style={[styles.wrapper, {flexDirection: getFlexDirection()}]}>
        <View style={styles.icon}>{icon && icon}</View>
        <TextInput {...rest} style={[styles.input, style]} />
      </View>
    </View>
  );
};

export default Input;
