import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 12,
  },
});
