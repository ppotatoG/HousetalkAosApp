import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, ViewStyle } from 'react-native';
import { SignupSteps } from '../../constants';

interface StepperProps {
  currentStep: number;
  steps: typeof SignupSteps | { [key: string]: number };
}

const Stepper = ({ currentStep, steps }: StepperProps) => {
  const totalSteps = Object.keys(steps).length;
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: (currentStep / totalSteps) * 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentStep]);

  const animatedStyle = {
    width: animatedWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.activeBar, animatedStyle as ViewStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  activeBar: {
    backgroundColor: '#204BFF',
    borderRadius: 1,
    height: 2,
  },
  container: {
    backgroundColor: '#EFEFEF',
    borderRadius: 1,
    height: 2,
    marginBottom: 20,
    width: 343,
  },
});

export default Stepper;
