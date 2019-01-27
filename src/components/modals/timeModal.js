import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { alcoStady } from '../../source/source';
import styles from './styles';

const TimeModal = (props) => {
  const {
    ppm,
    time,
    visible,
    update,
    lang,
    hide,
  } = props;
  const stady = alcoStady(ppm, lang.alcoStady);
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => update(false)}
    >
      <View style={styles.modalWrap}>
        <TouchableOpacity onPress={() => update(false)} style={styles.modalCloseWrap}>
          <MaterialCommunityIcons name="close" size={28} style={styles.modalCloseIcon} />
          <Text style={styles.modalCloseText}>{hide}</Text>
        </TouchableOpacity>
        <View style={styles.modalInner}>
          <Text style={styles.timeModalTitle}>{lang.promille}</Text>
          <Text style={styles.timeModalText}>{lang.ppmModalText}</Text>
          <Text style={styles.timeModalValue}>{ppm}</Text>
          <Text style={styles.timeModalStady}>{stady}</Text>

          <Text style={styles.timeModalTitle}>{lang.timeModalTitle}</Text>
          <Text style={styles.timeModalText}>{lang.timeModalText}</Text>
          <Text style={styles.timeModalValue}>{`${time[0]}:${time[1]}`}</Text>

          <View style={styles.modalWarningWrap}>
            <Text style={styles.modalWarningText}>{lang.timeAttention}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default TimeModal;
