import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  registrationWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registrationsLogoImage: {
    width: 96,
    height: 96,
    marginTop: -100,
  },
  registrationTitleText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.red,
    marginBottom: 20,
  },
  registrationTextInput: {
    backgroundColor: colors.mediumDark,
    width: 260,
    paddingHorizontal: 20,
    paddingVertical: 7,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.deepGrey,
    color: colors.white,
  },
  registrationAuthText: {
    color: colors.white,
  },
  registrationAuthTextBold: {
    color: colors.yellow,
    fontWeight: '600',
    paddingHorizontal: 8,
  },
  registrationAuthWrapper: {
    marginTop: 20,
    flexDirection: 'row',
  },
  registrationError: {
    color: colors.yellow,
    marginBottom: 5,
  },
});
