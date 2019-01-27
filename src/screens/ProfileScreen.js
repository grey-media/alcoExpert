import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ScrollView } from 'react-native';
import { en, ru } from '../data/lang';
import styles from './styles';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { Profile } from '../modules/profile';


class ProfileScreen extends React.Component {
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
            title={lang.profile.title.toUpperCase()}
            titleRed={lang.profile.titleRed.toUpperCase()}
            text={lang.profile.headerText}
          />
          <Profile navigation={navigation} />
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
)(ProfileScreen);
