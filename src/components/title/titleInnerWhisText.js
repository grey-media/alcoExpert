import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const TitleInnerWhisText = (props) => {
  const { title, text } = props;
  return (
    <View style={styles.titleInnerWrap}>
      <Text style={styles.titleInnerHeader}>{title}</Text>
      <Text style={styles.titleInnerText}>{text}</Text>
    </View>
  );
};

export default TitleInnerWhisText;
