import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  threeTabWrap: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginBottom: 15,
  },
  threeTabInner: {
    width: '33%',
    borderBottomWidth: 2,
    borderColor: colors.yellow,
  },
  threeTabInnerActive: {
    width: '33%',
    borderBottomWidth: 2,
    borderColor: colors.red,
  },
  threeTabText: {
    color: colors.white,
  },
});
