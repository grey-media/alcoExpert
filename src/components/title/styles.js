import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  titleWrapper: {
    alignItems: 'flex-start',
    marginTop: 40,
    marginBottom: 30,
    marginHorizontal: 30,
  },
  titleInner: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 22,
    color: colors.white,
    fontWeight: '600',
  },
  titleTextRed: {
    fontSize: 22,
    color: colors.red,
    fontWeight: '600',
    marginLeft: 10,
  },
  titleTextGrey: {
    color: colors.grey,
  },
  titleInnerWrap: {
    marginHorizontal: 30,
    marginBottom: 10,
  },
  titleInnerHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: colors.yellow,
  },
  titleInnerText: {
    color: colors.white,
  },
});
