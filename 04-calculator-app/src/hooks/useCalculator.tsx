import { useEffect, useRef, useState } from 'react';

enum Operation {
	add = '+',
	subtract = '-',
	multiply = 'x',
	divide = '÷',
}

export const useCalculator = () => {
	const lastOperation = useRef<Operation | null>(null);
	const [formula, setFormula] = useState('0');
	const [number, setNumber] = useState('0');
	const [prevNumber, setPrevNumber] = useState('0');

	const buildNumber = (numberString: string) => {
		if (number.includes('.') && numberString === '.') return;

		if (number.startsWith('0') || number.startsWith('-0')) {
			if (numberString === '.') {
				return setNumber(number + numberString);
			}
			if (numberString === '0' && number.includes('.')) {
				return setNumber(number + numberString);
			}

			if (numberString !== '0' && !number.includes('.')) {
				return setNumber(numberString);
			}

			if (numberString === '0' && !number.includes('.')) {
				return;
			}

			return setNumber(number + numberString);
		}

		setNumber(number + numberString);
	};

	const clear = () => {
		setNumber('0');
		setPrevNumber('0');
		setFormula('0');
		lastOperation.current = null;
	};

	const toggleSign = () => {
		if (number.includes('-')) {
			return setNumber(number.replace('-', ''));
		}

		return setNumber(`-${number}`);
	};

	const deleteLast = () => {
		if (number.length === 1 || (number.includes('-') && number.length === 2))
			return setNumber('0');
		setNumber(number.slice(0, -1));
	};

	const setLastNumber = () => {
		calculateResult();
		if (number.endsWith('.')) {
			return setPrevNumber(number.slice(0, -1));
		}

		setPrevNumber(number);
		setNumber('0');
	};

	const divideOperation = () => {
		setLastNumber();
		lastOperation.current = Operation.divide;
	};

	const multiplyOperation = () => {
		setLastNumber();
		lastOperation.current = Operation.multiply;
	};

	const addOperation = () => {
		setLastNumber();
		lastOperation.current = Operation.add;
	};

	const subtractOperation = () => {
		setLastNumber();
		lastOperation.current = Operation.subtract;
	};

	const calculateSubResult = () => {
		const [ferstValue, operation, secondValue] = formula.split(' ');
		const num1 = Number(ferstValue);
		const num2 = Number(secondValue);

		if (isNaN(num2)) return num1;

		switch (operation) {
			case Operation.add:
				return num1 + num2;
			case Operation.subtract:
				return num1 - num2;
			case Operation.multiply:
				return num1 * num2;
			case Operation.divide:
				return num1 / num2;
			default:
				throw new Error('Operation not supported');
		}
	};

	const calculateResult = () => {
		const subResult = calculateSubResult();
		setFormula(`${subResult}`);

		lastOperation.current = null;
		setPrevNumber('0');
	};

	useEffect(() => {
		if (lastOperation.current) {
			const firstFormulaPart = formula.split(' ').at(0);

			setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
		} else {
			setFormula(number);
		}
	}, [number]);

	useEffect(() => {
		const subResult = calculateSubResult();
		setPrevNumber(`${subResult}`);
	}, [formula]);

	return {
		//Props
		formula,
		number,
		prevNumber,

		lastOperation,

		//Methods
		clear,
		buildNumber,
		toggleSign,
		deleteLast,

		//Operations
		divideOperation,
		multiplyOperation,
		addOperation,
		subtractOperation,

		calculateResult,
	};
};
