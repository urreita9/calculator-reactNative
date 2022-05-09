import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>
      {/* 
#9B9B9B
#2D2D2D 
#FF9427*/}

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" />
        <ButtonCalc text="+/-" color="#9B9B9B" />
        <ButtonCalc text="%" color="#9B9B9B" />
        <ButtonCalc text="÷" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" color="#2D2D2D" />
        <ButtonCalc text="8" color="#2D2D2D" />
        <ButtonCalc text="9" color="#2D2D2D" />
        <ButtonCalc text="×" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" color="#2D2D2D" />
        <ButtonCalc text="5" color="#2D2D2D" />
        <ButtonCalc text="6" color="#2D2D2D" />
        <ButtonCalc text="-" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" color="#2D2D2D" />
        <ButtonCalc text="2" color="#2D2D2D" />
        <ButtonCalc text="3" color="#2D2D2D" />
        <ButtonCalc text="+" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" color="#2D2D2D" />
        <ButtonCalc text="." color="#2D2D2D" />
        <ButtonCalc text="=" color="#FF9427" />
      </View>
    </View>
  );
};
