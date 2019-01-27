import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const ButtonSet3 = (props) => {
  const { val, update } = props;
  const btnStyleOne = val === 0 ? styles.timeBtnSet3TextActive : styles.timeBtnSet3Text;
  const btnStyleTwo = val === 1 ? styles.timeBtnSet3TextActive : styles.timeBtnSet3Text;
  const btnStyleThree = val === 2 ? styles.timeBtnSet3TextActive : styles.timeBtnSet3Text;
  return (
    <View style={styles.timeBtnSet3Wrap}>
      <Text
        style={btnStyleOne}
        onPress={() => update(0)}
      >
        1
      </Text>
      <Text
        style={btnStyleTwo}
        onPress={() => update(1)}
      >
        2
      </Text>
      <Text
        style={btnStyleThree}
        onPress={() => update(2)}
      >
        3
      </Text>
    </View>
  );
};
export default ButtonSet3;
