import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Stepper from '../../components/Stepper';
import { SignupSteps } from '../../constants';
import NavigationButton from './NavigationButton.tsx';
import StepContent from './StepContent.tsx';

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
    birthDate: '',
    gender: null,
    phone: '',
    address: '',
    livingInfo: {
      duration: null,
      type: null,
      people: null,
    },
    id: '',
    nickname: '',
    profileImage: '',
  });

  const handleAgreeChange: AgreementChange = (key, value) => {
    setSignupData(prevData => ({
      ...prevData,
      termsOfService: {
        ...prevData.termsOfService,
        [key]: value,
      },
    }));
  };

  const handleDataChange: JoinFormChange = (key, value) => {
    setSignupData(prevData => {
      return {
        ...prevData,
        [key]: value,
      };
    });
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

  const isPrevButtonVisible = currentStep > SignupSteps.TERMS_AGREEMENT;
  const isNextButtonVisible = currentStep < totalSteps;
  const isNextButtonDisabled = buttonStepDisabled();

  return (
    <View style={styles.container}>
      <Stepper currentStep={currentStep} steps={SignupSteps} />
      <StepContent
        currentStep={currentStep}
        signupData={signupData}
        handleAgreeChange={handleAgreeChange}
        handleDataChange={handleDataChange}
      />
      <View style={styles.buttonWrap}>
        {isPrevButtonVisible && (
          <NavigationButton
            onPress={handlePrevStep}
            title="이전"
            style={styles.buttonContainer}
          />
        )}
        {isNextButtonVisible && (
          <NavigationButton
            onPress={handleNextStep}
            title={
              currentStep === SignupSteps.TERMS_AGREEMENT
                ? '동의하고 가입하기'
                : '다음'
            }
            disabled={isNextButtonDisabled}
            style={
              currentStep === SignupSteps.TERMS_AGREEMENT
                ? styles.fullWidthContainer
                : styles.halfWidthContainer
            }
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '48%',
  },
  buttonWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  container: {
    alignItems: 'stretch',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    padding: 20,
  },
  fullWidthContainer: {
    width: '100%',
  },
  halfWidthContainer: {
    width: '48%',
  },
});

export default SignupScreen;
