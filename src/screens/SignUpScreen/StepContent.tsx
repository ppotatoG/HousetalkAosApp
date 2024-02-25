import React from 'react';
import { Text } from 'react-native';
import { SignupSteps, StepLabels } from '../../constants';
import TermsAgreementForm from './TermsAgreementForm';
import UserNameForm from './UserNameForm';

interface StepContentProps {
  currentStep: SignupSteps;
  signupData: SignupData;
  handleAgreeChange: AgreementChange;
  handleDataChange: JoinFormChange;
}

const StepContent: React.FC<StepContentProps> = ({
  currentStep,
  signupData,
  handleAgreeChange,
  handleDataChange,
}) => {
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
        <UserNameForm data={signupData.name} onDataChange={handleDataChange} />
      );
    case SignupSteps.PROFILE_IMAGE:
      return <Text>{StepLabels[SignupSteps.PROFILE_IMAGE]}</Text>;
    default:
      return null;
  }
};

export default StepContent;
