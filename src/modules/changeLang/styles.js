import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  changeLangWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 60,
    marginHorizontal: 30,
  },
  changeLangInner: {
    backgroundColor: colors.mediumDark,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.deepGrey,
  },
  changeLangTextYellow: {
    color: colors.yellow,
  },
  changeLangTextGrey: {
    color: colors.grey,
  },
});
