import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  useClear?: boolean;
}

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry,
  useClear = true,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
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
      {useClear && (
        <TouchableOpacity
          onPress={handleClear}
          style={styles.clearButton}
          disabled={value.length === 0}
        >
          <Icon
            name="closecircle"
            size={20}
            color={value.length ? '#999' : '#ddd'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {
    backgroundColor: '#F3F4F5',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingRight: 40,
    paddingVertical: 12,
  },
  inputFocused: {
    backgroundColor: '#F3F4F5',
    borderColor: '#000000',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingRight: 40,
    paddingVertical: 12,
  },
});

export default CustomTextInput;
