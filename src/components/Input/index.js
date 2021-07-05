import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';

const Input = ({style, error, iconPosition = 'left', icon, label, ...rest}) => {
  const [focused, setFocused] = React.useState(false);

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
      return focused ? colors.primary : colors.grey;
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
        <TextInput
          {...rest}
          style={[styles.input, style]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
