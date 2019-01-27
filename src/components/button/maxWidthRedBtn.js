import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const MaxWidthRedBtn = (props) => {
  const { text } = props;
  return (
    <View style={styles.maxWidthRedWrapper}>
      <Text style={styles.bigRedText}>{text}</Text>
    </View>
  );
};
export default MaxWidthRedBtn;
