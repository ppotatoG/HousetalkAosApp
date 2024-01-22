import React from 'react';
import { View, Image } from 'react-native';

const Logo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 50, height: 50 }}
      />
      <Image
        source={require('../../assets/title.png')}
        style={{ width: 181, height: 37 }}
      />
    </View>
  );
};

export default Logo;
