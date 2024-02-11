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
import { termsData } from '../../constants';

const TermsAgreementForm = () => {
  const handleAllAgreePress = () => {
    const newCheckState = !checkboxStates.allAgree;
    setCheckboxStates({
      termsOfService: newCheckState,
      privacyPolicy: newCheckState,
      locationData: newCheckState,
      marketing: newCheckState,
      allAgree: newCheckState,
    });
  };

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
      const allChecked = Object.keys(newStates)
        .filter(k => k !== 'allAgree')
        .every(k => newStates[k as keyof CheckboxStates]);
      return { ...newStates, allAgree: allChecked };
    });
  };

  const [selectedItem, setSelectedItem] = useState('');
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['50%'], []);

  const openBottomSheet = (content: string) => {
    setSelectedItem(content);
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

  const renderTermsCheckboxes = () => {
    return termsData.map(term => (
      <View key={term.key} style={styles.checkboxRow}>
        <BouncyCheckbox
          size={25}
          isChecked={checkboxStates[term.key]}
          iconStyle={{ borderRadius: 2 }}
          fillColor={checkboxStates[term.key] ? '#204BFF' : '#ADB5BD'}
          innerIconStyle={{ borderRadius: 2, borderWidth: 2 }}
          onPress={() =>
            setIndividualCheckboxState(term.key, !checkboxStates[term.key])
          }
        />
        <Text style={styles.label}>
          {term.required ? ' [필수] ' : ' [선택] '}
          {term.title}
        </Text>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => openBottomSheet(term.content)}
        >
          <Text>보기</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>서비스 이용약관 동의 해주세요</Text>
      <View style={styles.allAgreeContainer}>
        <Button
          title={checkboxStates.allAgree ? '모두 동의 해제' : '모두 동의'}
          onPress={handleAllAgreePress}
        />
      </View>
      {renderTermsCheckboxes()}
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
  allAgreeContainer: {
    marginTop: 10,
    width: '100%',
  },
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
