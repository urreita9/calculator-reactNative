import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  cero?: boolean;
}

export const ButtonCalc = ({text, color = '#2D2D2D', cero = false}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: cero ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
