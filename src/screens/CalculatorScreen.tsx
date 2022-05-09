import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    prevNumber,
    resultNumber,
    clean,
    positiveNegative,
    del,
    divideBtn,
    multiplyBtn,
    substractBtn,
    sumBtn,
    writeNumber,
    calc,
    error,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.smallResult}>{prevNumber}</Text>
      )}

      {error ? (
        <Text style={{...styles.result, color: 'yellow', fontSize: 30}}>
          {resultNumber}
        </Text>
      ) : (
        <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
          {resultNumber}
        </Text>
      )}

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={del} />
        <ButtonCalc text="/" color="#FF9427" action={divideBtn} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={writeNumber} />
        <ButtonCalc text="8" action={writeNumber} />
        <ButtonCalc text="9" action={writeNumber} />
        <ButtonCalc text="x" color="#FF9427" action={multiplyBtn} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={writeNumber} />
        <ButtonCalc text="5" action={writeNumber} />
        <ButtonCalc text="6" action={writeNumber} />
        <ButtonCalc text="-" color="#FF9427" action={substractBtn} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={writeNumber} />
        <ButtonCalc text="2" action={writeNumber} />
        <ButtonCalc text="3" action={writeNumber} />
        <ButtonCalc text="+" color="#FF9427" action={sumBtn} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" cero action={writeNumber} />
        <ButtonCalc text="." action={writeNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calc} />
      </View>
    </View>
  );
};
