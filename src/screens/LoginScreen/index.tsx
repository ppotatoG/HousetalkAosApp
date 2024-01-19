import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from './Logo';

type LoginScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>
        자취생만을 위한 커뮤니티 House Talk와 함께 다채로운 자취생활을
        시작하세요!
      </Text>
      <View style={styles.kakaoLogin}>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.kakaoText}>kakaoLogin</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.naverLogin}>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.naverText}>Naver Lo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.appleLogin}>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.appleText}>kakaoLogin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appleLogin: {
    backgroundColor: '#000',
    borderRadius: 10,
    height: 44,
    padding: 10,
    width: 343,
  },
  appleText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  kakaoLogin: {
    backgroundColor: '#FEE500',
    borderRadius: 10,
    height: 44,
    padding: 10,
    width: 343,
  },
  kakaoText: {
    color: '#381E1F',
    fontSize: 14,
    textAlign: 'center',
  },
  naverLogin: {
    backgroundColor: '#1EC800',
    borderRadius: 10,
    height: 44,
    padding: 10,
    width: 343,
  },
  naverText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    width: 300,
  },
});

export default LoginScreen;
