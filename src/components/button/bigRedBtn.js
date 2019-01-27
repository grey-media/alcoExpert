import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const BigRedBtn = (props) => {
  const { text } = props;
  return (
    <View style={styles.bigRedWrapper}>
      <Text style={styles.bigRedText}>{text}</Text>
    </View>
  );
};
export default BigRedBtn;
