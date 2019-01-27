import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const Title = (props) => {
  const { title, titleRed, text } = props;
  return (
    <View style={styles.titleWrapper}>
      <View style={styles.titleInner}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.titleTextRed}>{titleRed}</Text>
      </View>
      <Text style={styles.titleTextGrey}>{text}</Text>
    </View>
  );
};

export default Title;
