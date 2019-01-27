import React from 'react';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import { en, ru } from '../../data/lang';
import { enAlco, ruAlco } from '../../data/alco';


class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    const {
      navigation,
      page,
      icon,
      appData
    } = this.props;
    const { search } = this.state;
    // select language
    const lang = appData.lang === 'en' ? en : ru;
    const alcoData = appData.lang === 'en' ? enAlco : ruAlco;
    // make regular expression whis search string and flag i (ignore register)
    const searchVal = RegExp(search, 'i');
    // filter alco array
    const filterAlco = alcoData.filter(val => val.title.match(searchVal));
    return (
      <View style={styles.filterListWrapper}>
        <TextInput
          style={styles.filterListInput}
          maxLength={30}
          onChangeText={val => this.setState({ search: val })}
          value={search}
          placeholder={lang.addAlco.searchPlaceholder}
        />
        {
          filterAlco.map((item, id) => (
            <View key={id.toString()} style={styles.filterItemWrapper}>
              <View style={styles.filterItemTextWrapper}>
                <Image
                  style={styles.filterItemImage}
                  source={item.img}
                />
                <View>
                  <Text style={styles.filterItemTitle}>{item.title}</Text>
                  <Text style={styles.filterItemText}>{item.vol}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate(page, item)}>
                <MaterialCommunityIcons name={icon} size={32} style={styles.filterItemIcon} />
              </TouchableOpacity>
            </View>
          ))
        }
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
)(FilteredList);
