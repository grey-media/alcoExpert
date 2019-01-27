import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  bigRedWrapper: {
    backgroundColor: colors.red,
    width: 260,
    height: 45,
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  maxWidthRedWrapper: {
    backgroundColor: colors.red,
    width: '100%',
    height: 45,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  bigRedText: {
    color: colors.white,
  },
});
