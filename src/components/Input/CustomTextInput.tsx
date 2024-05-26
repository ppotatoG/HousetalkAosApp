import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  useClear?: boolean;
}

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  useClear,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const clearInput = () => {
    onChangeText('');
  };

  return (
    <View style={styles.container}>
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
      {useClear ? (
        <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
          <Icon name="rocket" size={30} color="#900" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    marginRight: 10,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#F3F4F5',
    borderRadius: 4,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputFocused: {
    backgroundColor: '#F3F4F5',
    borderColor: '#000000',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 2,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default CustomTextInput;
