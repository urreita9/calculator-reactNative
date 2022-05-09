import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color: string;
}

export const ButtonCalc = ({text, color}: Props) => {
  return (
    <View style={{...styles.button, backgroundColor: color}}>
      <Text
        style={{
          ...styles.buttonText,
          color: color === '#9B9B9B' ? 'black' : 'white',
        }}>
        {text}
      </Text>
    </View>
  );
};
