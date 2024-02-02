import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from '../../components/Logo';
import CustomTextInput from '../../components/Input/CustomTextInput';
type LoginScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('SignUp');
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
      <View style={styles.inputBox}>
        <CustomTextInput
          placeholder="이메일"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <CustomTextInput
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          keyboardType="default"
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.emailLogin}>
        <Text style={styles.emailLoginText}>로그인 하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    gap: 100,
    justifyContent: 'center',
  },
  emailLogin: {
    backgroundColor: '#000',
    borderRadius: 10,
    height: 44,
    padding: 10,
    width: 343,
  },
  emailLoginText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  inputBox: {
    gap: 8,
    width: 343,
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
