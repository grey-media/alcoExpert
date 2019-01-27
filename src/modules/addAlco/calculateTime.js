import React from 'react';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { en, ru } from '../../data/lang';
import {
  SelectVol,
  TotalCircle,
  UpdateTotalVal,
  ButtonSet3,
} from '../../components/calculate';
import { TimeModal } from '../../components/modals';
import { TitleInnerWhisText } from '../../components/title';
import {
  calculatePromile,
  calculateVolMg,
  removalTime,
  ppmAdj,
  removalAdj,
  hoursToTime,
} from '../../source/source';

class CalculateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      vol: props.drink.val,
      modalVisible: false,
      eat: 0,
      activity: 0,
      ppm: 0,
      time: [0, 0],
    };
  }

  render() {
    const { appData, drink, profileData } = this.props;
    const {
      total,
      vol,
      modalVisible,
      eat,
      activity,
      ppm,
      time,
    } = this.state;
    // select language
    const lang = appData.lang === 'en' ? en : ru;
    const updateVol = val => this.setState({ vol: val });
    const updateTotal = val => this.setState({ total: val });
    const updateEat = val => this.setState({ eat: val });
    const updateActivity = val => this.setState({ activity: val });
    const updateModalVisible = val => this.setState({ modalVisible: val });
    const calculate = () => {
      const A = calculateVolMg(total, vol);
      const r = profileData.gender === 'male' ? 0.7 : 0.6;
      const m = profileData.weight;
      const ppmValAdj = ppmAdj(eat);
      const removalValAdj = removalAdj(profileData.gender, activity);
      const ppmResult = calculatePromile(A, m, r, ppmValAdj);
      const hours = removalTime(ppmResult, removalValAdj);
      const timeResult = hoursToTime(hours);
      this.setState({
        modalVisible: true,
        ppm: ppmResult.toFixed(3),
        time: timeResult,
      });
    };

    return (
      <View style={styles.detailListWrapper}>

        <TimeModal
          ppm={ppm}
          time={time}
          visible={modalVisible}
          update={updateModalVisible}
          lang={lang.time}
          hide={lang.hide}
        />

        <SelectVol title={drink.title.toUpperCase()} vol={vol} update={updateVol} />
        <TotalCircle totalText={lang.total} total={total} ml={lang.ml} />
        <UpdateTotalVal ml={lang.ml} total={total} update={updateTotal} />
        <TitleInnerWhisText title={lang.time.eatTitle} text={lang.time.eatText} />
        <ButtonSet3 val={eat} update={updateEat} />
        <TitleInnerWhisText title={lang.time.moveTitle} text={lang.time.moveText} />
        <ButtonSet3 val={activity} update={updateActivity} />
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
            onPress={() => calculate()}
          >
            <MaterialCommunityIcons name="arrow-top-right-thick" size={24} style={styles.detailsIconRed} />
            <Text style={styles.detailsButtonTextRed}>
              {lang.time.calc.toUpperCase()}
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
    profileData: state.profileData,
  };
}

// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
)(CalculateTime);
