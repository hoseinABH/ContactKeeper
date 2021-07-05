import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';

const Input = ({style, error, iconPosition = 'left', icon, label, ...rest}) => {
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {borderColor: getBorderColor()},
          {flexDirection: getFlexDirection()},
        ]}>
        <View style={styles.icon}>{icon && icon}</View>
        <TextInput {...rest} style={[styles.input, style]} />
      </View>
    </View>
  );
};

export default Input;
