import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTextInput from '../../components/Input/CustomTextInput.tsx';

const UserNameForm = ({ data, onDataChange }: JoinFormProps) => {
  const handleNameChange = (name: string) => {
    onDataChange('name', name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>이름을 입력 해주세요</Text>
      <CustomTextInput
        placeholder="이름"
        value={data}
        onChangeText={handleNameChange}
      />
    </View>
  );
};

export default UserNameForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    marginBottom: 20,
    textAlign: 'left',
  },
});
