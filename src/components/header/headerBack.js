import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const imgLogo = require('../../images/logo.png');

const HeaderBack = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.headerBackWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={32} style={styles.headerBackIcon} />
      </TouchableOpacity>
      <Image
        style={styles.headerLogoImage}
        source={imgLogo}
      />
    </View>
  )
};

export default HeaderBack;
