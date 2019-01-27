import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  filterListWrapper: {
    flex: 1,
    marginHorizontal: 30,
    marginBottom: 40,
  },
  filterListInput: {
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
  filterItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.mediumDark,
  },
  filterItemTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterItemImage: {
    width: 65,
    height: 65,
    marginRight: 20,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.grey,
  },
  filterItemTitle: {
    color: colors.yellow,
    fontSize: 16,
    fontWeight: '600',
  },
  filterItemText: {
    color: colors.white,
  },
  filterItemIcon: {
    color: colors.grey,
  },
  detailListWrapper: {
    flex: 1,
    marginBottom: 40,
  },
  detailsIconGrey: {
    color: colors.grey,
  },
  detailsIconYellow: {
    color: colors.yellow,
  },
  detailsIconRed: {
    color: colors.red,
  },
  detailsButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
    marginTop: 30,
  },
  detailsButtonTextYellow: {
    color: colors.yellow,
    fontSize: 18,
    fontWeight: '600',
  },
  detailsButtonTextRed: {
    color: colors.red,
    fontSize: 18,
    fontWeight: '600',
  },
  detailsButtonTextGrey: {
    color: colors.grey,
    fontSize: 18,
    fontWeight: '600',
  },
  succsess: {
    color: colors.yellow,
    fontWeight: '600',
    textAlign: 'center',
  },

});
