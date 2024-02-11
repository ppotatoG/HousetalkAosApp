import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BottomSheetModal, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { TermsOfService } from '../../constants';

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

  const [selectedItem, setSelectedItem] = useState('');
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const openBottomSheet = (item: string) => {
    setSelectedItem(item);
    bottomSheetRef.current?.expand();
  };

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>서비스 이용약관 동의 해주세요</Text>

      <View style={styles.checkboxRow}>
        <BouncyCheckbox
          size={25}
          isChecked={checkboxStates.termsOfService}
          iconStyle={{
            borderRadius: 2,
          }}
          fillColor={checkboxStates.termsOfService ? '#204BFF' : '#ADB5BD'}
          innerIconStyle={{
            borderRadius: 2,
            borderWidth: 2,
          }}
          onPress={() =>
            setIndividualCheckboxState(
              'termsOfService',
              !checkboxStates.termsOfService
            )
          }
        />
        <Text style={styles.label}>서비스 이용약관</Text>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => openBottomSheet(TermsOfService)}
        >
          <Text>보기</Text>
        </TouchableOpacity>
      </View>

      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        style={styles.bottomSheet}
        index={-1}
        backdropComponent={renderBackdrop}
      >
        <View style={styles.contentContainer}>
          <Text>{selectedItem}</Text>
          <Button
            title="닫기"
            onPress={() => bottomSheetRef.current?.close()}
          />
        </View>
      </BottomSheetModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  checkboxRow: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  container: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
    minWidth: '100%',
    padding: 20,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    color: '#000',
    flex: 1,
    fontSize: 14,
  },
  title: {
    color: '#000',
    fontSize: 20,
    marginBottom: 20,
  },
  viewButton: {
    backgroundColor: '#fff',
    fontSize: 14,
  },
});

export default TermsAgreementForm;
