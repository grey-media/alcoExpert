import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const imgLogo = require('../../images/logo.png');

const Header = () => (
  <View style={styles.headerWrapper}>
    <Image
      style={styles.headerLogoImage}
      source={imgLogo}
    />
  </View>
);

export default Header;
