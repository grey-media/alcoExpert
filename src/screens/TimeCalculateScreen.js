import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { en, ru } from '../data/lang';
import styles from './styles';
import { HeaderBack } from '../components/header';
import { Title } from '../components/title';
import { CalculateTime } from '../modules/addAlco';

class TimeCalculateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: props.navigation.state.params,
    };
  }

  render() {
    const { appData, navigation } = this.props;
    const { drink } = this.state;
    const lang = appData.lang === 'en' ? en : ru;
    return (
      <View style={styles.mainFlexWrapper}>
        <HeaderBack navigation={navigation} />
        <ScrollView>
          <Title
            title={lang.time.title.toUpperCase()}
            titleRed={lang.time.titleRed.toUpperCase()}
            text={lang.addAlcoDetail.headerText}
          />
          <CalculateTime drink={drink} />
        </ScrollView>
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
)(TimeCalculateScreen);
