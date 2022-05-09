import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

enum Operators {
  sum,
  substract,
  multiply,
  divide,
}

export const CalculatorScreen = () => {
  const [resultNumber, setResultNumber] = useState('100');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setResultNumber('0');
    setPrevNumber('0');
  };

  const writeNumber = (textNumber: string) => {
    // No double '.'
    if (resultNumber.includes('.') && textNumber === '.') return;

    if (resultNumber.startsWith('0') || resultNumber.startsWith('-0')) {
      //decimal '.'
      if (textNumber === '.') {
        setResultNumber(resultNumber + textNumber);

        //Another 0
      } else if (textNumber === '0' && resultNumber.includes('.')) {
        setResultNumber(resultNumber + textNumber);

        // !==0 && !'.'
      } else if (textNumber !== '0' && !resultNumber.includes('.')) {
        setResultNumber(textNumber);
        //Avoid 0000.0
      } else if (textNumber !== '0' && resultNumber.includes('.')) {
        setResultNumber(resultNumber + textNumber);
      } else if (textNumber === '0' && !resultNumber.includes('.')) {
        setResultNumber(resultNumber);
      }
    } else {
      setResultNumber(resultNumber + textNumber);
    }
  };

  const del = () => {
    if (resultNumber.length === 1) {
      setResultNumber('0');
    } else if (resultNumber.length === 2 && resultNumber.startsWith('-')) {
      setResultNumber('0');
    } else if (
      resultNumber.length === 3 &&
      resultNumber.startsWith('-') &&
      resultNumber.endsWith('.')
    ) {
      setResultNumber('0');
    } else {
      setResultNumber(resultNumber.slice(0, -1));
    }
  };

  const positiveNegative = () => {
    if (resultNumber.includes('-')) {
      setResultNumber(resultNumber.replace('-', ''));
    } else {
      setResultNumber('-' + resultNumber);
    }
  };

  const getPrevNumber = () => {
    if (resultNumber.endsWith('.')) {
      setPrevNumber(resultNumber.slice(0, -1));
    } else {
      setPrevNumber(resultNumber);
      setResultNumber('0');
    }
  };

  const divideBtn = () => {
    getPrevNumber();
    lastOperation.current = Operators.divide;
  };
  const multiplyBtn = () => {
    getPrevNumber();
    lastOperation.current = Operators.multiply;
  };
  const substractBtn = () => {
    getPrevNumber();
    lastOperation.current = Operators.substract;
  };
  const sumBtn = () => {
    getPrevNumber();
    lastOperation.current = Operators.sum;
  };

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.smallResult}>{prevNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {resultNumber}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={del} />
        <ButtonCalc text="÷" color="#FF9427" action={divideBtn} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={writeNumber} />
        <ButtonCalc text="8" action={writeNumber} />
        <ButtonCalc text="9" action={writeNumber} />
        <ButtonCalc text="×" color="#FF9427" action={multiplyBtn} />
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
        <ButtonCalc text="=" color="#FF9427" action={clean} />
      </View>
    </View>
  );
};
