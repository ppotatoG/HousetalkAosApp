import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from '../../components/Logo';

type LoginScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleEmailLogin = () => {
    navigation.navigate('EmailLogin');
  };

  return (
    <View style={styles.container}>
      <View>
        <Logo />
        <Text style={styles.text}>
          자취생만을 위한 커뮤니티 House Talk와 함께 다채로운 자취생활을
          시작하세요!
        </Text>
      </View>
      <View style={styles.buttonBox}>
        <View style={styles.kakaoLogin}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.kakaoText}>Kakao로 로그인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.naverLogin}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.naverText}>Naver로 로그인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.appleLogin}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.appleText}>Apple로 로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleEmailLogin}>
        <Text style={styles.emailLoginText}>이메일로 로그인 하기</Text>
      </TouchableOpacity>
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
  buttonBox: {
    gap: 8,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    gap: 100,
    justifyContent: 'center',
  },
  emailLoginText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
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
    marginTop: 8,
    textAlign: 'center',
    width: 300,
  },
});

export default LoginScreen;
