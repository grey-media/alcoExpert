import React from 'react';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { auth } from '../../config/firebase';
import styles from './styles';
import { en, ru } from '../../data/lang';
import { getJournalDataDateFiltered } from '../../source/firebase';
import { calculateVolMg, calculateDate, dateToString } from '../../source/source';

class BarChartShort extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  async componentDidMount() {
    const updateData = val => this.setState({ data: val });
    // set query data to the state
    // format [[date, amount, drinkVol, drinkId], ...]
    // last argument - period (days)
    await getJournalDataDateFiltered(auth.currentUser.uid, updateData, (-111));
  }

  renderLoadView() {
    this.returnView = (
      <View style={styles.loadWrap}>
        <ActivityIndicator size="large" />
      </View>
    );
    return this.returnView;
  }

  renderDataView() {
    const { data } = this.state;


    let i = 0;
    let startDate;
    let endDate;
    const arrMg = [];
    const dateArr = [];

    while (i > -112) {
      let arrInner = 0;
      // let arrInner = [];
      // look max period date
      startDate = calculateDate(i);
      // look min period date 
      i -= 6;
      endDate = calculateDate(i);
      // shift for 1 day
      i -= 1;
      // create date period array
      const startDateString = dateToString(startDate);
      const endDateString = dateToString(endDate);
      dateArr.push([endDateString, startDateString])
      // console.log(startDate, endDate);
      data.map((item) => {
        // if item hit to the period
        if (item[0] <= startDateString && item[0] >= endDateString) {
          // calculate clean alcohol value
          const mmgg = calculateVolMg(item[1], item[2]);
          // plus value to the weekly alco mg variable
          arrInner += mmgg;
          //arrInner.push(item[0])
        }
        return arrInner;
      });
      // calculate average weekly alcohol mg
      arrMg.push(arrInner / 7);
    }
    // take new data last
    arrMg.reverse();
    // look max array element value
    let maxHeight = Math.max(...arrMg);


    this.returnView = (
      <View style={styles.chartWrap}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            height: 150,
          }}
        >
          {
            arrMg.map((item, id) => (
              <View
                style={{
                  width: '5%',
                  height: item * 130 / maxHeight + 1,
                  backgroundColor: '#ffffff',
                }}
                key={id.toString()}
              />
            ))
          }
        </View>
        <Text
          onPress={() => { }}
        >
          Charts is here
        </Text>
      </View>
    );
    return this.returnView;
  }

  render() {
    const { data } = this.state;
    if (data === '') return this.renderLoadView();
    return this.renderDataView();
  }
}

function mapStateToProps(state) {
  return {
    // присваиваем ключам пропсов значения из хранилища редакса
    appData: state.appData,
    profileData: state.profileData,
  };
}

// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
)(BarChartShort);
