import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const SuccessModal = (props) => {
  const {
    navigation,
    moveTo,
    visible,
    update,
    moveToBtn,
    back,
    title,
    hide,
  } = props;

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
        <View style={styles.modalInnerCenter}>
          <Text style={styles.modalTitle}>
            {title.toUpperCase()}
          </Text>
          <View style={styles.modalButtonWrapper}>
            <TouchableOpacity
              style={styles.modalItemTextWrapper}
              onPress={() => update(false)}
            >
              <MaterialCommunityIcons name="arrow-bottom-left-thick" size={24} style={styles.modalIconYellow} />
              <Text style={styles.modalButtonTextYellow}>{back.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalItemTextWrapper}
              onPress={() => {
                update(false);
                navigation.navigate(moveTo);
              }}
            >
              <MaterialCommunityIcons name="arrow-top-right-thick" size={24} style={styles.modalIconRed} />
              <Text style={styles.modalButtonTextRed}>{moveToBtn.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default SuccessModal;
