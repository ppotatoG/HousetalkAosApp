import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined; // 다른 화면으로 이동할 때 필요한 파라미터를 여기에 정의할 수 있습니다.
  // 예: Home: { userId: string };
  // 추가 화면에 대한 정의도 여기에 추가할 수 있습니다.
};

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen!!!!!!</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;
