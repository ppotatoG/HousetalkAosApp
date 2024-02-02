export const SignupSteps = {
  TERMS_AGREEMENT: 1,
  NAME: 2,
  BIRTHDATE: 3,
  CONTACT: 4,
  ADDRESS: 5,
  RESIDENCE: 6,
  USERNAME: 7,
  PASSWORD: 8,
  NICKNAME: 9,
  PROFILE_IMAGE: 10,
};

export const StepLabels = {
  [SignupSteps.TERMS_AGREEMENT]: '이용약관 동의',
  [SignupSteps.NAME]: '이름',
  [SignupSteps.BIRTHDATE]: '생년월일',
  [SignupSteps.CONTACT]: '연락처',
  [SignupSteps.ADDRESS]: '주소 입력',
  [SignupSteps.RESIDENCE]: '거주 환경 등록',
  [SignupSteps.USERNAME]: '아이디',
  [SignupSteps.PASSWORD]: '비밀번호',
  [SignupSteps.NICKNAME]: '닉네임',
  [SignupSteps.PROFILE_IMAGE]: '프로필 이미지 설정',
};
