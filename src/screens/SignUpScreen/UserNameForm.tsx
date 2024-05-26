import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTextInput from '../../components/Input/CustomTextInput.tsx';

const UserNameForm = ({ data, onDataChange }: JoinFormProps) => {
  const handleNameChange = (name: string) => {
    onDataChange('name', name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>이름을 입력해주세요</Text>
      <View style={styles.inputBox}>
        <CustomTextInput
          placeholder="홍길동"
          value={data}
          onChangeText={handleNameChange}
          keyboardType="default"
          useClear={true}
        />
      </View>
    </View>
  );
};

export default UserNameForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
  },
  inputBox: {
    gap: 8,
    width: 343,
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 20,
  },
});
