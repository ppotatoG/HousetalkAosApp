export enum SignupSteps {
  TERMS_AGREEMENT = 1,
  NAME = 2,
  BIRTHDATE = 3,
  CONTACT = 4,
  ADDRESS = 5,
  RESIDENCE = 6,
  USERNAME = 7,
  PASSWORD = 8,
  NICKNAME = 9,
  PROFILE_IMAGE = 10,
}

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

const TermsOfServiceTitle = '이용약관';
const PrivacyPolicyTitle = '개인정보 처리방침';
const LocationPolicyTitle = '위치정보 이용약관';
const MarketingPolicyTitle = '마케팅 활용 동의';

const TermsOfService = `
제1조 (목적)
이 약관은 회사(전자상거래 사업자)가 운영하는 하우스톡에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 하우스톡과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.

※「PC 통신 등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」

제2조 (정의)
1. "하우스톡"이란 회사가 재화 또는 용역(이하 "재화 등"이라 한다)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 하우스톡을 운영하는 사업자의 의미로도 사용합니다.
2. "이용자"란 "하우스톡"에 접속하여 이 약관에 따라 "하우스톡"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
3. "회원"이라 함은 "하우스톡"에 개인정보를 제공하여 회원등록을 한 자로서, "하우스톡"의 정보를 지속적으로 제공받으며, "하우스톡"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
4. "비회원"이라 함은 회원에 가입하지 않고 "하우스톡"이 제공하는 서비스를 이용하는 자를 말합니다.

제3조 (약관 등의 명시와 설명 및 개정)
① "하우스톡"은 이 약관의 내용과 상호, 영업장 소재지 주소, 전화번호, 사업자등록번호, 통신판매업 신고번호, 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 하우스톡의 초기 서비스화면(전면)에 게시합니다.
② "하우스톡"은 이용자가 약관에 동의하기에 앞서 약관에 정해진 내용 중 청약철회, 배송책임, 환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구해야 합니다.
③ "하우스톡"은 전자상거래 등에서의 소비자보호에 관한 법률, 전자문서 및 전자거래 기본법, 전자서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 방문판매 등에 관한 법률, 소비자기본법 등 관련 법률을 위반하지 않는 범위에서 이 약관을 개정할 수 있습니다.
④ "하우스톡"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 하우스톡의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
⑤ "하우스톡"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자로부터 효력이 발생합니다. 이용자가 개정약관에 동의하지 않는 경우 "하우스톡"은 해당 이용자와의 계약을 해지할 수 있으며, 이 경우 이용자는 하우스톡을 이용할 수 없습니다.
`;

const PrivacyPolicy = `
제1조 (목적)
이 개인정보 처리방침은 하우스톡이 이용자의 개인정보를 어떻게 수집, 이용, 보관, 공개하는지에 대한 방침을 명시합니다. 이용자의 권리와 의무를 보호하고, 개인정보와 관련된 정보를 투명하게 공개하기 위함입니다.

제2조 (개인정보의 수집 및 이용)
1. 하우스톡은 서비스 제공을 위해 필요한 최소한의 개인정보를 수집합니다.
2. 수집하는 개인정보 항목과 이용 목적은 다음과 같습니다.
   - 이름, 연락처, 이메일: 회원 관리 및 서비스 제공을 위함
   - 접속 로그, 쿠키, 사용 기기 정보: 서비스 이용 통계 및 분석을 위함

제3조 (개인정보의 보관 및 파기)
1. 하우스톡은 법령에 따른 개인정보 보관 기간 동안 이용자의 정보를 안전하게 보관합니다.
2. 보관 기간이 지난 후에는 해당 정보를 지체 없이 파기합니다.

제4조 (개인정보의 제3자 제공 및 공유)
1. 하우스톡은 법률에서 허용하는 범위 내에서만 개인정보를 제3자에게 제공합니다.
2. 이용자의 동의 없이 개인정보를 제3자에게 제공하거나 공유하지 않습니다.
`;

const LocationPolicy = `
제1조 (목적)
본 약관은 하우스톡 서비스에서 이용자의 위치정보를 어떻게 수집, 이용, 보호하는지에 대한 조건을 명시합니다.

제2조 (위치정보의 수집 및 이용)
1. 하우스톡은 서비스 향상을 위해 이용자의 위치정보를 수집할 수 있습니다.
2. 위치정보는 다음 목적을 위해 사용될 수 있습니다.
   - 맞춤형 서비스 제공
   - 위치 기반 분석 및 통계

제3조 (위치정보의 보호 및 사용자 권리)
1. 하우스톡은 이용자의 위치정보를 안전하게 보관하며, 법률에 따라 적절히 관리합니다.
2. 이용자는 언제든지 위치정보 수집에 대한 동의를 철회할 수 있습니다.
`;

const MarketingPolicy = `
제1조 (목적)
이 동의서는 하우스톡이 이용자의 정보를 마케팅 목적으로 어떻게 사용하는지에 대한 내용을 명시합니다.

제2조 (마케팅 정보의 이용)
1. 이용자가 마케팅 정보 수신에 동의하는 경우, 하우스톡은 다음 목적으로 개인정보를 이용할 수 있습니다.
   - 신제품 및 서비스 소개, 특별 프로모션, 이벤트 정보 제공
   - 개인화된 광고 및 추천 서비스 제공

제3조 (동의 철회)
1. 이용자는 언제든지 마케팅 정보 수신 동의를 철회할 수 있습니다.
2. 동의를 철회하는 경우, 마케팅 관련 정보 수신이 중단됩니다.
`;

export const termsData: TermsData[] = [
  {
    key: 'termsOfService',
    title: TermsOfServiceTitle,
    content: TermsOfService,
    required: true,
  },
  {
    key: 'privacyPolicy',
    title: PrivacyPolicyTitle,
    content: PrivacyPolicy,
    required: true,
  },
  {
    key: 'locationData',
    title: LocationPolicyTitle,
    content: LocationPolicy,
    required: true,
  },
  {
    key: 'marketing',
    title: MarketingPolicyTitle,
    content: MarketingPolicy,
    required: false,
  },
];
