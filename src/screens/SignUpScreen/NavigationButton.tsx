import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface NavigationButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style: ViewStyle;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  onPress,
  title,
  disabled,
  style,
}) => (
  <View style={style}>
    <TouchableOpacity
      onPress={onPress}
      style={disabled ? styles.buttonDisabled : styles.button}
      disabled={disabled}
    >
      <Text style={disabled ? styles.buttonDisabledText : styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);

export default NavigationButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 10,
    height: 44,
    padding: 10,
    width: '100%',
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
});
