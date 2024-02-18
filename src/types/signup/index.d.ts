interface TermsData {
  key: keyof CheckboxStates;
  title: string;
  content: string;
  required: boolean;
}

interface CheckboxStates {
  termsOfService: boolean;
  privacyPolicy: boolean;
  locationData: boolean;
  marketing: boolean;
  allAgree: boolean;
}

interface SignupData {
  termsOfService: CheckboxStates;
  name: string;
  profileImage: string | null;
}
