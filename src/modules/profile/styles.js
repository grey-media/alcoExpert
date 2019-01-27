import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';
import { noop } from 'rxjs';

export default StyleSheet.create({
  profileWrapper: {
    flex: 1,
    marginHorizontal: 30,
    marginBottom: 40,
  },
  profileTextInput: {
    backgroundColor: colors.mediumDark,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 7,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.deepGrey,
    color: colors.white,
  },
  profileButtonSetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  profileBtnText: {
    backgroundColor: colors.mediumDark,
    width: '46%',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 13,
    paddingBottom: 9,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.deepGrey,
    color: colors.grey,
  },
  profileBtnTextActive: {
    backgroundColor: colors.mediumDark,
    width: '46%',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 13,
    paddingBottom: 9,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.yellow,
    color: colors.yellow,
  },
  profileFieldTitleUnderlineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.mediumDark,
  },
  profileFieldTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 4,
  },
  profileFieldTitle: {
    color: colors.grey,
    fontSize: 16,
  },
  profileFieldTitleYellow: {
    color: colors.yellow,
    fontSize: 20,
    marginTop: -3,
    marginLeft: 5,
  },
  profileFieldIcon: {
    color: colors.grey,
    marginRight: 5,
  },
  profileStartMessage: {
    backgroundColor: colors.red,
    color: colors.white,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  hidden: {
    display: 'none',
  },
  error: {
    color: colors.red,
  },
  succsess: {
    color: colors.yellow,
    fontWeight: '600',
  },
  exit: {
    color: colors.red,
    marginLeft: 40,
  }
});
