import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
}
const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
}: TextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F3F4F5',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default CustomTextInput;
