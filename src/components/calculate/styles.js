import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({

  volWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: -20,
  },
  volTitle: {
    fontSize: 16,
    color: colors.white,
    paddingLeft: 20,
    maxWidth: '50%',
  },
  volCircleWrap: {
    backgroundColor: colors.dark,
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  volText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
  },
  volIcon: {
    color: colors.yellow,
  },
  totalWrap: {
    alignItems: 'center',
    marginVertical: 10,
  },
  totalCircle: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 115,
    borderWidth: 10,
    borderColor: colors.red,
  },
  totalText: {
    color: colors.yellow,
    fontWeight: '600',
  },
  totalValue: {
    color: colors.white,
    fontSize: 60,
    fontWeight: '600',
  },
  totalMl: {
    color: colors.grey,
    fontWeight: '600',
  },
  plusWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  plusCircle: {
    backgroundColor: colors.mediumDark,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  plusText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 12,
  },
  plusValue: {
    color: colors.red,
    fontSize: 20,
    fontWeight: '600',
  },
  plusMl: {
    color: colors.white,
    fontSize: 10,
  },
  dateWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  dateLeftWrapper: {
    backgroundColor: colors.mediumDark,
    width: 80,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-end',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  dateRightWrapper: {
    backgroundColor: colors.mediumDark,
    width: 80,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-start',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  dateTextWrapper: {
    alignItems: 'center',
  },
  dateTextSmall: {
    color: colors.yellow,
  },
  dateText: {
    color: colors.white,
    fontSize: 22,
  },
  iconGrey: {
    color: colors.grey,
  },
  iconYellow: {
    color: colors.yellow,
  },
  timeBtnSet3Wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 30,
  },
  timeBtnSet3Text: {
    backgroundColor: colors.mediumDark,
    width: '30%',
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
  timeBtnSet3TextActive: {
    backgroundColor: colors.mediumDark,
    width: '30%',
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
});
