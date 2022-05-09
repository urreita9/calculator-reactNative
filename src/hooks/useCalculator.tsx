import {useState, useRef} from 'react';

enum Operators {
  sum,
  substract,
  multiply,
  divide,
}
export const useCalculator = () => {
  const [resultNumber, setResultNumber] = useState('100');
  const [prevNumber, setPrevNumber] = useState('0');
  const [error, setError] = useState(false);
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setError(false);
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

  const calc = () => {
    const num1 = Number(resultNumber);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.sum:
        setResultNumber(`${num1 + num2}`);

        break;
      case Operators.substract:
        setResultNumber(`${num2 - num1}`);

        break;
      case Operators.multiply:
        setResultNumber(`${num1 * num2}`);

        break;
      case Operators.divide:
        if (num1 === 0) {
          setError(true);
          setResultNumber(
            `Error. Enter www.franciscourrea.com.ar for more info.`,
          );
          return;
        }
        setResultNumber(`${num2 / num1}`);

        break;
    }
    setPrevNumber('0');
  };

  return {
    resultNumber,
    prevNumber,
    clean,
    calc,
    divideBtn,
    multiplyBtn,
    substractBtn,
    sumBtn,
    positiveNegative,
    del,
    writeNumber,
    error,
  };
};
