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
  birthDate: string;
  gender: Gender;
  phone: string;
  address: string;
  livingInfo: LivingInfo;
  id: string;
  nickname: string;
  profileImage: string;
}

type AgreementChange = (key: keyof CheckboxStates, value: boolean) => void;

interface AgreementProps {
  data: CheckboxStates;
  onDataChange: AgreementChange;
}

interface JoinFormProps {
  data: string;
  onDataChange: JoinFormChange;
}

type JoinFormChange = (
  key: keyof SignupData,
  value: string | boolean | null
) => void;

interface LivingInfo {
  duration: '1-2 years' | '3-4 years' | '5 years or more' | null;
  type: 'One-room' | 'Two-room' | null;
  people: '1 person' | '2 people' | '3 or more people' | null;
}

type gender = 'female' | 'male' | null;
