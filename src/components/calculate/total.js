import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const TotalCircle = (props) => {
  const { totalText, total, ml } = props;
  return (
    <View style={styles.totalWrap}>
      <View style={styles.totalCircle}>
        <Text style={styles.totalText}>{totalText}</Text>
        <Text style={styles.totalValue}>{total}</Text>
        <Text style={styles.totalMl}>{ml}</Text>
      </View>
    </View>
  );
};
export default TotalCircle;
