import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import styles from './styles';
const Button = ({disabled, loading, onPress, title, color}) => {
  const getBgColor = () => {
    switch (color) {
      case 'primary':
        return colors.primary;
      case 'secondary':
        return colors.secondary;
      case 'danger':
        return colors.danger;
      default:
        return colors.primary;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.wrapper,
        {backgroundColor: disabled ? colors.grey : getBgColor()},
      ]}>
      <View style={[styles.loaderWrapper]}>
        {loading && <ActivityIndicator color={colors.grey} />}
      </View>
      {title && (
        <Text
          style={{color: disabled ? 'black' : colors.white, paddingLeft: 5}}>
          {title}
          {loading && '...'}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
