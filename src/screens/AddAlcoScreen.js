import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { en, ru } from '../data/lang';
import styles from './styles';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { FilteredList } from '../modules/addAlco';
import { ThreeTabNav } from '../components/navigate';

class AddAlcoScreen extends React.Component {
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
            title={lang.addAlco.title.toUpperCase()}
            titleRed={lang.addAlco.titleRed.toUpperCase()}
            text={lang.addAlco.headerText}
          />
          <ThreeTabNav
            navigation={navigation}
            linkOne="StatMain"
            linkTwo="StatAdd"
            linkThree="StatLast"
            textOne={lang.stat.stats.toUpperCase()}
            textTwo={lang.stat.addDrink.toUpperCase()}
            textThree={lang.stat.lastDrinks.toUpperCase()}
            active={2}
          />
          <FilteredList navigation={navigation} page="StatAddDetail" icon="plus-circle-outline" />
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
)(AddAlcoScreen);
