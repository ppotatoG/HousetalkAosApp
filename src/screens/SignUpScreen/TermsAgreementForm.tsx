import React, { useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BottomSheet from '@gorhom/bottom-sheet';

interface CheckboxStates {
  termsOfService: boolean;
  privacyPolicy: boolean;
  locationData: boolean;
  marketing: boolean;
  allAgree: boolean;
}

const TermsAgreementForm = () => {
  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>({
    termsOfService: false,
    privacyPolicy: false,
    locationData: false,
    marketing: false,
    allAgree: false,
  });

  const setIndividualCheckboxState = (
    key: keyof CheckboxStates,
    value: boolean
  ) => {
    setCheckboxStates(prevStates => {
      const newStates = { ...prevStates, [key]: value };
      const allChecked = Object.entries(newStates)
        .filter(([k]) => k !== 'allAgree')
        .every(([, v]) => v);
      return { ...newStates, allAgree: allChecked };
    });
  };

  const setAllAgree = (value: boolean) => {
    setCheckboxStates({
      termsOfService: value,
      privacyPolicy: value,
      locationData: value,
      marketing: value,
      allAgree: value,
    });
  };

  const [selectedItem, setSelectedItem] = useState('');
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const openBottomSheet = (item: string) => {
    setSelectedItem(item);
    bottomSheetRef.current?.expand();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>이용약관 동의</Text>

      <View style={styles.checkboxRow}>
        <BouncyCheckbox
          size={25}
          isChecked={checkboxStates.termsOfService}
          onPress={() =>
            setIndividualCheckboxState(
              'termsOfService',
              !checkboxStates.termsOfService
            )
          }
        />
        <Text style={styles.label}>서비스 이용약관</Text>
        <Button
          title="보기"
          onPress={() => openBottomSheet('서비스 이용약관')}
        />
      </View>

      <View style={styles.checkboxRow}>
        <BouncyCheckbox
          size={25}
          isChecked={checkboxStates.allAgree}
          onPress={() => setAllAgree(!checkboxStates.allAgree)}
        />
        <Text style={styles.label}>전체 동의</Text>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
      >
        <View style={styles.contentContainer}>
          <Text>{selectedItem}</Text>
          <Button
            title="닫기"
            onPress={() => bottomSheetRef.current?.close()}
          />
        </View>
      </BottomSheet>

      <Button
        title="동의하기"
        onPress={() => console.log(checkboxStates)}
        disabled={!checkboxStates.allAgree}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  checkboxRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TermsAgreementForm;
