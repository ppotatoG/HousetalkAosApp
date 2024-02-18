import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Stepper from '../../components/Stepper';
import { SignupSteps, StepLabels } from '../../constants';
import TermsAgreementForm from './TermsAgreementForm.tsx';

type LoginScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
};

const SignupScreen: React.FC<LoginScreenProps> = () => {
  const [currentStep, setCurrentStep] = useState(SignupSteps.TERMS_AGREEMENT);
  const totalSteps = Object.keys(SignupSteps).length;

  const [signupData, setSignupData] = useState<SignupData>({
    termsOfService: {
      termsOfService: false,
      privacyPolicy: false,
      locationData: false,
      marketing: false,
      allAgree: false,
    },
    name: '',
    profileImage: null,
  });

  const handleDataChange = (
    key: keyof CheckboxStates,
    value: boolean | string | null
  ) => {
    console.log(key, value);
    setSignupData(prevData => ({
      ...prevData,
      termsOfService: {
        ...prevData.termsOfService,
        [key]: value,
      },
    }));
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > SignupSteps.TERMS_AGREEMENT) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case SignupSteps.TERMS_AGREEMENT:
        return (
          <TermsAgreementForm
            data={signupData.termsOfService}
            onDataChange={handleDataChange}
          />
        );
      case SignupSteps.NAME:
        return <Text>{StepLabels[SignupSteps.NAME]}</Text>;
      case SignupSteps.PROFILE_IMAGE:
        return <Text>{StepLabels[SignupSteps.PROFILE_IMAGE]}</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Stepper currentStep={currentStep} steps={SignupSteps} />

      {renderStepContent()}
      <View style={styles.buttonContainer}>
        {currentStep > SignupSteps.TERMS_AGREEMENT && (
          <Button title="이전" onPress={handlePrevStep} />
        )}
        {currentStep < totalSteps && (
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
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    gap: 100,
    justifyContent: 'center',
  },
});

export default SignupScreen;
