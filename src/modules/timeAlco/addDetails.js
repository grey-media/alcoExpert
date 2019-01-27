import React from 'react';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { auth } from '../../config/firebase';
import styles from './styles';
import { en, ru } from '../../data/lang';
import { calculateDate, dateToString } from '../../source/source';
import { setJournalData } from '../../source/firebase';
import {
  SelectVol,
  TotalCircle,
  UpdateTotalVal,
  UpdateDateVal,
} from '../../components/calculate';

class AddDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      changeDate: 0,
      vol: props.drink.val,
      successMessage: '',
    };
  }

  render() {
    const { appData, drink } = this.props;
    const {
      total,
      changeDate,
      vol,
      successMessage,
    } = this.state;
    // select language
    const lang = appData.lang === 'en' ? en : ru;

    const updateVol = val => this.setState({ vol: val });
    const updateTotal = val => this.setState({ total: val });
    const updateDate = val => this.setState({ changeDate: val });
    return (
      <View style={styles.detailListWrapper}>

        <SelectVol title={drink.title.toUpperCase()} vol={vol} update={updateVol} />
        <TotalCircle totalText={lang.total} total={total} ml={lang.ml} />
        <UpdateTotalVal ml={lang.ml} total={total} update={updateTotal} />
        <UpdateDateVal val={changeDate} text={lang.addAlcoDetail.selectDate} update={updateDate} />
        <Text style={styles.succsess}>{successMessage}</Text>
        <View style={styles.detailsButtonWrapper}>
          <TouchableOpacity
            style={styles.filterItemTextWrapper}
            onPress={() => this.setState({ total: 0, vol: drink.val })}
          >
            <MaterialCommunityIcons name="arrow-bottom-left-thick" size={24} style={styles.detailsIconYellow} />
            <Text style={styles.detailsButtonTextYellow}>
              {lang.addAlcoDetail.reset.toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterItemTextWrapper}
            onPress={() => {
              if (total !== 0) {
                setJournalData(
                  auth.currentUser.uid,
                  calculateDate(changeDate),
                  total,
                  drink.id,
                  vol,
                );
                this.setState({
                  successMessage: lang.addAlcoDetail.successMessage,
                  total: 0,
                  changeDate: 0,
                  vol: drink.val,
                });
              }
            }}
          >
            <MaterialCommunityIcons name="arrow-top-right-thick" size={24} style={styles.detailsIconRed} />
            <Text style={styles.detailsButtonTextRed}>
              {lang.addAlcoDetail.addDrink.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    // присваиваем ключам пропсов значения из хранилища редакса
    appData: state.appData,
  };
}

// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
)(AddDetails);
