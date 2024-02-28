import React, { useState } from 'react';
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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={isFocused ? styles.inputFocused : styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
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
  inputFocused: {
    backgroundColor: '#F3F4F5',
    borderColor: '#000000',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default CustomTextInput;
