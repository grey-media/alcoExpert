import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ActivityIndicator } from 'react-native';
import { auth, db } from '../config/firebase';
import { profileUpdate, dataUpdateLang } from '../actions';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { navigation, updateLang, updateProfile } = this.props;
    //auth.signOut()
    auth.onAuthStateChanged((user) => {
      // если пользователь не активирован перенаправляем на регистрацию
      if (user === null) {
        navigation.navigate('Registration');
      } else {
        // select user profile from DB.
        db.collection('profile').doc(auth.currentUser.uid).get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              // if profile exist - update store
              updateLang(data.lang);
              updateProfile(data);
              // if profile exist - redirect to main app page
              navigation.navigate('Main');
            } else {
              // else - redirect to profile screen
              navigation.navigate('Profile');
            }
          })
          .catch((error) => {
            console.log('Error getting document:', error);
          });
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
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
    updateProfile: profileUpdate,
    updateLang: dataUpdateLang,
  }, dispatch);
}
// конектим стор и экшены с компонентом
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingScreen);
