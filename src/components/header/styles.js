import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  headerWrapper: {
    alignItems: 'flex-end',
    marginTop: 50,
    marginHorizontal: 30,
  },
  headerLogoImage: {
    width: 144,
    height: 40,
  },
  headerBackWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingBottom: 5,
    marginHorizontal: 30,
  },
  headerBackIcon: {
    color: colors.red,
    marginTop: 10,
  },
});
