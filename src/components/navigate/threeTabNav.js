import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ThreeTabNav = (props) => {
  const {
    navigation,
    active,
    linkOne,
    linkTwo,
    linkThree,
    textOne,
    textTwo,
    textThree,
  } = props;
  const oneWrapStyle = active === 1 ? styles.threeTabInnerActive : styles.threeTabInner;
  const twoWrapStyle = active === 2 ? styles.threeTabInnerActive : styles.threeTabInner;
  const threeWrapStyle = active === 3 ? styles.threeTabInnerActive : styles.threeTabInner;
  return (
    <View style={styles.threeTabWrap}>
      <TouchableOpacity
        style={oneWrapStyle}
        onPress={() => navigation.navigate(linkOne)}
      >
        <Text style={styles.threeTabText}>
          {textOne}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={twoWrapStyle}
        onPress={() => navigation.navigate(linkTwo)}
      >
        <Text style={styles.threeTabText}>
          {textTwo}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={threeWrapStyle}
        onPress={() => navigation.navigate(linkThree)}
      >
        <Text style={styles.threeTabText}>
          {textThree}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThreeTabNav;
