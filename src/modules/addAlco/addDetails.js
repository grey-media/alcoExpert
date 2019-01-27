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
import { calculateDate } from '../../source/source';
import { setJournalData } from '../../source/firebase';
import {
  SelectVol,
  TotalCircle,
  UpdateTotalVal,
  UpdateDateVal,
} from '../../components/calculate';
import { SuccessModal } from '../../components/modals';

class AddDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      changeDate: 0,
      vol: props.drink.val,
      modalVisible: false,
    };
  }

  render() {
    const { appData, drink, navigation } = this.props;
    const {
      total,
      changeDate,
      vol,
      modalVisible,
    } = this.state;
    // select language
    const lang = appData.lang === 'en' ? en : ru;
    const btnStyle = total === 0 ? styles.detailsButtonTextGrey : styles.detailsButtonTextRed;
    const btnIconStyle = total === 0 ? styles.detailsIconGrey : styles.detailsIconRed;
    const updateVol = val => this.setState({ vol: val });
    const updateTotal = val => this.setState({ total: val });
    const updateDate = val => this.setState({ changeDate: val });
    const updateModalVisible = val => this.setState({ modalVisible: val });
    return (
      <View style={styles.detailListWrapper}>

        <SuccessModal
          visible={modalVisible}
          update={updateModalVisible}
          navigation={navigation}
          moveTo="StatLast"
          moveToBtn={lang.addAlcoDetail.toStats}
          back={lang.addAlcoDetail.addMore}
          title={lang.addAlcoDetail.modalTitle}
          hide={lang.hide}
        />

        <SelectVol title={drink.title.toUpperCase()} vol={vol} update={updateVol} />
        <TotalCircle totalText={lang.total} total={total} ml={lang.ml} />
        <UpdateTotalVal ml={lang.ml} total={total} update={updateTotal} />
        <UpdateDateVal val={changeDate} text={lang.addAlcoDetail.selectDate} update={updateDate} />
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
                  total: 0,
                  changeDate: 0,
                  vol: drink.val,
                  modalVisible: true,
                });
              }
            }}
          >
            <MaterialCommunityIcons name="arrow-top-right-thick" size={24} style={btnIconStyle} />
            <Text style={btnStyle}>
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
