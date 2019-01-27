import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const SelectVol = (props) => {
  const { vol, title, update } = props;
  return (

    <View style={styles.volWrap}>
      <TouchableOpacity onPress={() => {
        if (vol > 1) {
          update(vol - 1);
        }
      }}
      >
        <MaterialCommunityIcons name="arrow-down" size={24} style={styles.volIcon} />
      </TouchableOpacity>
      <View style={styles.volCircleWrap}>
        <Text style={styles.volText}>{`${vol}%`}</Text>
      </View>
      <TouchableOpacity onPress={() => {
        if (vol < 99) {
          update(vol + 1);
        }
      }}
      >
        <MaterialCommunityIcons name="arrow-up" size={24} style={styles.volIcon} />
      </TouchableOpacity>
        <Text style={styles.volTitle}>{title}</Text>
    </View>
  );
};
export default SelectVol;
