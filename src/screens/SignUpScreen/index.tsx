import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Stepper from '../../components/Stepper';
import { SignupSteps, StepLabels } from '../../constants';
import TermsAgreementForm from './TermsAgreementForm.tsx';
import UserNameForm from './UserNameForm.tsx';

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

  const renderStepContent = () => {
    switch (currentStep) {
      case SignupSteps.TERMS_AGREEMENT:
        return (
          <TermsAgreementForm
            data={signupData.termsOfService}
            onDataChange={handleAgreeChange}
          />
        );
      case SignupSteps.NAME:
        return (
          <UserNameForm
            data={signupData.name}
            onDataChange={handleDataChange}
          />
        );
      case SignupSteps.PROFILE_IMAGE:
        return <Text>{StepLabels[SignupSteps.PROFILE_IMAGE]}</Text>;
      default:
        return null;
    }
  };

  const isPrevButtonVisible = currentStep > SignupSteps.TERMS_AGREEMENT;
  const isNextButtonVisible = currentStep < totalSteps;
  const isNextButtonDisabled = buttonStepDisabled();

  const renderPrevButton = () => (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handlePrevStep} style={styles.button}>
        <Text style={styles.buttonText}>이전</Text>
      </TouchableOpacity>
    </View>
  );

  const renderNextButton = () => (
    <View
      style={
        currentStep === SignupSteps.TERMS_AGREEMENT
          ? styles.fullWidthContainer
          : styles.halfWidthContainer
      }
    >
      <TouchableOpacity
        onPress={handleNextStep}
        style={isNextButtonDisabled ? styles.buttonDisabled : styles.button}
        disabled={isNextButtonDisabled}
      >
        <Text
          style={
            isNextButtonDisabled ? styles.buttonDisabledText : styles.buttonText
          }
        >
          {currentStep === SignupSteps.TERMS_AGREEMENT
            ? '동의하고 가입하기'
            : '다음'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Stepper currentStep={currentStep} steps={SignupSteps} />
      {renderStepContent()}
      <View style={styles.buttonWrap}>
        {isPrevButtonVisible && renderPrevButton()}
        {isNextButtonVisible && renderNextButton()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 10,
    height: 44,
    padding: 10,
    width: '100%',
  },
  buttonContainer: {
    width: '48%',
  },
  buttonDisabled: {
    backgroundColor: '#DEE2E6',
    borderRadius: 10,
    height: 44,
    padding: 10,
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
