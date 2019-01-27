import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const UpdateTotalVal = (props) => {
  const { total, ml, update } = props;
  return (
    <View style={styles.plusWrap}>
      <TouchableOpacity
        style={styles.plusCircle}
        onPress={() => {
          const val = total < 9999 ? total + 50 : total;
          update(val);
        }}
      >
        <Text style={styles.plusText}>+</Text>
        <Text style={styles.plusValue}>50</Text>
        <Text style={styles.plusMl}>{ml}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.plusCircle}
        onPress={() => {
          const val = total < 9999 ? total + 100 : total;
          update(val);
        }}
      >
        <Text style={styles.plusText}>+</Text>
        <Text style={styles.plusValue}>100</Text>
        <Text style={styles.plusMl}>{ml}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.plusCircle}
        onPress={() => {
          const val = total < 9999 ? total + 250 : total;
          update(val);
        }}
      >
        <Text style={styles.plusText}>+</Text>
        <Text style={styles.plusValue}>250</Text>
        <Text style={styles.plusMl}>{ml}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.plusCircle}
        onPress={() => {
          const val = total < 9999 ? total + 500 : total;
          update(val);
        }}
      >
        <Text style={styles.plusText}>+</Text>
        <Text style={styles.plusValue}>500</Text>
        <Text style={styles.plusMl}>{ml}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UpdateTotalVal;
