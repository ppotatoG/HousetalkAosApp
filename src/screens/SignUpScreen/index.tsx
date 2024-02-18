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

  const buttonStepDisabled = () => {
    switch (currentStep) {
      case SignupSteps.TERMS_AGREEMENT:
        return !signupData.termsOfService.allAgree;
      case SignupSteps.NAME:
        return !signupData.name;
      case SignupSteps.PROFILE_IMAGE:
        return !signupData.profileImage;
      default:
    }
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

      {currentStep > SignupSteps.TERMS_AGREEMENT && (
        <TouchableOpacity
          onPress={handlePrevStep}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>이전</Text>
        </TouchableOpacity>
      )}
      {currentStep < totalSteps && (
        <TouchableOpacity
          onPress={handleNextStep}
          style={
            buttonStepDisabled()
              ? styles.buttonDisabledContainer
              : styles.buttonContainer
          }
          disabled={buttonStepDisabled()}
        >
          <Text style={styles.buttonDisabledText}>
            {currentStep === 1 ? '동의하고 가입하기' : '다음'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#000',
    borderRadius: 10,
    height: 44,
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
    width: '100%',
  },
  buttonDisabledContainer: {
    backgroundColor: '#DEE2E6',
    borderRadius: 10,
    color: '#ADB5BD',
    height: 44,
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
    width: '100%',
  },
  buttonDisabledText: {
    color: '#ADB5BD',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    flex: 1,
    gap: 100,
    height: '100%',
    justifyContent: 'flex-start',
    padding: 20,
  },
});

export default SignupScreen;
