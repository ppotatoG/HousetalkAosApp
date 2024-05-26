import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const UserNameForm = ({ data, onDataChange }: JoinFormProps) => {
  const handleNameChange = (name: string) => {
    onDataChange('name', name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>이름을 입력해주세요</Text>
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={handleNameChange}
      />
    </View>
  );
};

export default UserNameForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderColor: '#000',
    borderRadius: 10,
  },
  title: {},
});
