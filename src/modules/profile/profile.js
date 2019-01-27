import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { auth, db } from '../../config/firebase';
import { setProfileData } from '../../source/firebase';
import styles from './styles';
import { en, ru } from '../../data/lang';
import { MaxWidthRedBtn } from '../../components/button';
import { profileUpdate, dataUpdateLang } from '../../actions';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    const { appData } = props;
    this.state = {
      empty: false,
      successMessage: '',
      weightError: '',
      userName: '',
      gender: 'male',
      weight: '',
      selectLang: appData.lang,
      email: auth.currentUser.email,
    };
  }

  componentDidMount() {
    db.collection('profile').doc(auth.currentUser.uid).get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({
            // add state data
            gender: doc.data().gender,
            userName: doc.data().userName,
            weight: doc.data().weight,
          });
        } else {
          // add start text block
          this.setState({ empty: true });
        }
      });
  }

  render() {
    const { navigation, updateLang, updateProfile } = this.props;
    const {
      weightError,
      successMessage,
      empty,
      userName,
      gender,
      weight,
      selectLang,
      email,
    } = this.state;
    // select language
    const lang = selectLang === 'en' ? en : ru;
    // select element style
    const maleStyle = gender === 'male' ? styles.profileBtnTextActive : styles.profileBtnText;
    const femaleStyle = gender === 'female' ? styles.profileBtnTextActive : styles.profileBtnText;
    const enStyle = selectLang === 'en' ? styles.profileBtnTextActive : styles.profileBtnText;
    const ruStyle = selectLang === 'ru' ? styles.profileBtnTextActive : styles.profileBtnText;
    // display start message when profile is empty
    const startStyle = empty === true ? styles.profileStartMessage : styles.hidden;

    return (
      <View style={styles.profileWrapper}>
        <Text style={startStyle}>{lang.profile.startMessage}</Text>
        <View style={styles.profileFieldTitleUnderlineWrapper}>
          <MaterialCommunityIcons name="email-outline" size={22} style={styles.profileFieldIcon} />
          <Text style={styles.profileFieldTitleYellow}>{email}</Text>
          <Text
            style={styles.exit}
            onPress={() => auth.signOut()}
          >
            {lang.profile.exit}
          </Text>
        </View>
        <View style={styles.profileFieldTitleWrapper}>
          <MaterialCommunityIcons name="account" size={22} style={styles.profileFieldIcon} />
          <Text style={styles.profileFieldTitle}>{lang.profile.userName}</Text>
        </View>
        <TextInput
          style={styles.profileTextInput}
          autoCapitalize="words"
          maxLength={30}
          onChangeText={val => this.setState({ userName: val })}
          value={userName}
          placeholder={lang.enterData}
        />
        <Text style={styles.error}>{weightError}</Text>
        <View style={styles.profileFieldTitleWrapper}>
          <MaterialCommunityIcons name="weight" size={22} style={styles.profileFieldIcon} />
          <Text style={styles.profileFieldTitle}>{lang.profile.weight}</Text>
        </View>
        <TextInput
          style={styles.profileTextInput}
          keyboardType="number-pad"
          maxLength={3}
          onChangeText={val => this.setState({ weight: val })}
          value={`${weight}`}
          placeholder={lang.enterData}
        />
        <View style={styles.profileFieldTitleWrapper}>
          <MaterialCommunityIcons name="gender-male-female" size={22} style={styles.profileFieldIcon} />
          <Text style={styles.profileFieldTitle}>{lang.profile.gender}</Text>
        </View>
        <View style={styles.profileButtonSetWrapper}>
          <Text
            style={maleStyle}
            onPress={() => this.setState({ gender: 'male' })}
          >
            {lang.profile.male}
          </Text>
          <Text
            style={femaleStyle}
            onPress={() => this.setState({ gender: 'female' })}
          >
            {lang.profile.female}
          </Text>
        </View>
        <View style={styles.profileFieldTitleWrapper}>
          <MaterialCommunityIcons name="book-open" size={22} style={styles.profileFieldIcon} />
          <Text style={styles.profileFieldTitle}>{lang.profile.lang}</Text>
        </View>
        <View style={styles.profileButtonSetWrapper}>
          <Text
            style={enStyle}
            onPress={() => this.setState({ selectLang: 'en' })}
          >
            {lang.profile.en}
          </Text>
          <Text
            style={ruStyle}
            onPress={() => this.setState({ selectLang: 'ru' })}
          >
            {lang.profile.ru}
          </Text>
        </View>
        <Text style={styles.succsess}>{successMessage}</Text>
        <TouchableOpacity onPress={() => {
          if (weight !== '') {
            setProfileData(
              auth.currentUser.uid,
              userName,
              Number(weight),
              gender,
              selectLang,
            );
            const data = { userName, weight, gender };
            updateLang(selectLang);
            updateProfile(data);
            this.setState({ successMessage: lang.profile.successMessage });
            navigation.navigate('Main');
          } else {
            this.setState({ weightError: lang.profile.emptyWeightError });
          }
        }
        }
        >
          <MaxWidthRedBtn text={lang.save} />
        </TouchableOpacity>
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
)(Profile);
