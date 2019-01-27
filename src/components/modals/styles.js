import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  modalWrap: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingHorizontal: 30,
  },
  modalCloseWrap: {
    flexDirection: 'row',
    marginVertical: 40,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalCloseIcon: {
    color: colors.red,
  },
  modalCloseText: {
    color: colors.red,
    fontSize: 18,
    marginLeft: 8,
  },
  modalInner: {
    flex: 1,
    marginTop: -80,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  modalInnerCenter: {
    flex: 1,
    marginTop: -80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeModalTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.yellow,
  },
  timeModalText: {
    color: colors.white,
  },
  timeModalValue: {
    fontSize: 60,
    color: colors.red,
    marginBottom: 20,
  },
  modalWarningWrap: {
    backgroundColor: colors.red,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  modalWarningText: {
    color: colors.white,
  },
  timeModalStady: {
    color: colors.grey,
    fontSize: 18,
    marginTop: -28,
    marginBottom: 28,
  },
  modalButtonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
    marginTop: 30,
  },
  modalItemTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalIconYellow: {
    color: colors.yellow,
  },
  modalIconRed: {
    color: colors.red,
  },
  modalButtonTextYellow: {
    color: colors.yellow,
    fontSize: 18,
    fontWeight: '600',
  },
  modalButtonTextRed: {
    color: colors.red,
    fontSize: 18,
    fontWeight: '600',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
  },
});
