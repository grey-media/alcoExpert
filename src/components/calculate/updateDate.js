import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { calculateDate, dateToString } from '../../source/source';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const UpdateDateVal = (props) => {
  const { val, text, update } = props;
  // get date string whis new date value
  const dateStr = dateToString(calculateDate(val));
  // assign grey collor to the right date arrow
  const arrowStyle = new Date() >= calculateDate(val + 1)
    ? styles.iconYellow
    : styles.iconGrey;

  return (
    <View style={styles.dateWrapper}>
      <TouchableOpacity
        style={styles.dateLeftWrapper}
        onPress={() => update(val - 1)}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} style={styles.iconYellow} />
      </TouchableOpacity>
      <View style={styles.dateTextWrapper}>
        <Text style={styles.dateTextSmall}>{text}</Text>
        <Text style={styles.dateText}>{dateStr}</Text>
      </View>
      <TouchableOpacity
        style={styles.dateRightWrapper}
        onPress={() => {
          if (new Date() >= calculateDate(val + 1)) {
            update(val + 1);
          }
        }}
      >
        <MaterialCommunityIcons name="arrow-right" size={24} style={arrowStyle} />
      </TouchableOpacity>
    </View>
  );
};
export default UpdateDateVal;
