import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { dataUpdateLang } from '../../actions';
import styles from './styles';

class ChangeLang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { appData, updateLang } = this.props;
    // select language
    const lang = appData.lang === 'en' ? 'en' : 'ru';
    const ruStyle = lang === 'ru' ? styles.changeLangTextYellow : styles.changeLangTextGrey;
    const enStyle = lang === 'en' ? styles.changeLangTextYellow : styles.changeLangTextGrey;

    return (
      <View style={styles.changeLangWrapper}>
        <TouchableOpacity onPress={() => updateLang('en')}>
          <View style={styles.changeLangInner}>
            <Text style={enStyle}>
              en
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateLang('ru')}>
          <View style={styles.changeLangInner}>
            <Text style={ruStyle}>
              ru
            </Text>
          </View>
        </TouchableOpacity>
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateLang: dataUpdateLang,
  }, dispatch);
}
// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeLang);
