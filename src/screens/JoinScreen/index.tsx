import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { StackNavigationProp } from '@react-navigation/stack';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

type LoginScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
};
const SignupScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const labels = ['계정 정보', '개인 정보', '가입 완료'];

  const handleNextStep = () => {
    if (currentStep < labels.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <Text>계정 정보 입력 폼</Text>; // 여기에 실제 폼 컴포넌트를 렌더링
      case 1:
        return <Text>개인 정보 입력 폼</Text>; // 여기에 실제 폼 컴포넌트를 렌더링
      case 2:
        return <Text>가입 완료!</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentStep}
        labels={labels}
        stepCount={labels.length}
      />
      {renderStepContent()}
      <View style={styles.buttonContainer}>
        {currentStep > 0 && <Button title="이전" onPress={handlePrevStep} />}
        {currentStep < labels.length - 1 && (
          <Button title="다음" onPress={handleNextStep} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default SignupScreen;
