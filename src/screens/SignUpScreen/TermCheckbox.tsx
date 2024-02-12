import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React from 'react';
interface TermCheckboxProps {
  termKey: keyof CheckboxStates;
  label: string;
  isChecked: boolean;
  onChange: (key: keyof CheckboxStates, value: boolean) => void;
  onOpenBottomSheet: (content: string) => void;
  content: string;
}
const TermCheckbox = ({
  termKey,
  label,
  isChecked,
  onChange,
  onOpenBottomSheet,
  content,
}: TermCheckboxProps) => (
  <View style={styles.checkboxRow}>
    <BouncyCheckbox
      size={25}
      isChecked={isChecked}
      iconStyle={{ borderRadius: 2 }}
      fillColor={isChecked ? '#204BFF' : '#ADB5BD'}
      innerIconStyle={{ borderRadius: 2, borderWidth: 2 }}
      onPress={() => onChange(termKey, !isChecked)}
    />
    <Text style={styles.label} onPress={() => onChange(termKey, !isChecked)}>
      {label}
    </Text>
    <TouchableOpacity
      style={styles.viewButton}
      onPress={() => onOpenBottomSheet(content)}
    >
      <Text>보기</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  checkboxRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  label: {
    color: '#000',
    flex: 1,
    fontSize: 14,
  },
  viewButton: {
    backgroundColor: '#fff',
    fontSize: 14,
  },
});

export default TermCheckbox;
