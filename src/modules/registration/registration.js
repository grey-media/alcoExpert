import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { auth } from '../../config/firebase';
import styles from './styles';
import { en, ru } from '../../data/lang';
import { BigRedBtn } from '../../components/button';

const imgLogoIcon = require('../../images/icon.png');

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  render() {
    const { appData, navigation } = this.props;
    const { email, password, error } = this.state;
    // select language
    const lang = appData.lang === 'en' ? en : ru;

    return (
      <View style={styles.registrationWrapper}>
        <Image
          style={styles.registrationsLogoImage}
          source={imgLogoIcon}
        />
        <Text style={styles.registrationTitleText}>
          {lang.registration.title.toUpperCase()}
        </Text>
        <Text style={styles.registrationError}>{error}</Text>
        <TextInput
          style={styles.registrationTextInput}
          keyboardType="email-address"
          onChangeText={mail => this.setState({ email: mail })}
          value={email}
          placeholder={lang.emial}
        />
        <TextInput
          style={styles.registrationTextInput}
          secureTextEntry
          onChangeText={pass => this.setState({ password: pass })}
          value={password}
          placeholder={lang.password}
        />
        <TouchableOpacity onPress={() => {
          auth.createUserWithEmailAndPassword(email, password)
            .catch((alert) => {
              const errorMessage = alert.message;
              this.setState({ error: errorMessage });
            });
        }}
        >
          <BigRedBtn text={lang.registration.signUp} />
        </TouchableOpacity>
        <View style={styles.registrationAuthWrapper}>
          <Text style={styles.registrationAuthText}>
            {lang.registration.authText}
          </Text>
          <Text style={styles.registrationAuthTextBold} onPress={() => navigation.navigate('Login')}>
            {lang.registration.authLink.toUpperCase()}
          </Text>
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
)(Registration);
