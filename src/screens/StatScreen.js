import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ScrollView } from 'react-native';
import { en, ru } from '../data/lang';
import styles from './styles';
import { Header } from '../components/header';
import { ThreeTabNav } from '../components/navigate';
import { BarChartShort } from '../modules/charts';
import { Title } from '../components/title';


class StatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { appData, navigation } = this.props;
    const lang = appData.lang === 'en' ? en : ru;
    return (
      <View style={styles.mainFlexWrapper}>
        <ScrollView>
          <Header />
          <Title
            title={lang.stat.title.toUpperCase()}
            titleRed={lang.stat.titleRed.toUpperCase()}
            text={lang.stat.headerText}
          />
          <ThreeTabNav
            navigation={navigation}
            linkOne="StatMain"
            linkTwo="StatAdd"
            linkThree="StatLast"
            textOne={lang.stat.stats.toUpperCase()}
            textTwo={lang.stat.addDrink.toUpperCase()}
            textThree={lang.stat.lastDrinks.toUpperCase()}
            active={1}
          />
          <BarChartShort />
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
// передаем в пропсы экшены и диспачим их
function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}
// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatScreen);