import { View } from 'react-native';
import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';

const CalculetorApp = () => {
	const {
		formula,
		prevNumber,
		clear,
		buildNumber,
		toggleSign,
		deleteLast,
		divideOperation,
		multiplyOperation,
		addOperation,
		subtractOperation,
		calculateResult,
	} = useCalculator();
	return (
		<View style={globalStyles.calculatorContainer}>
			<View
				style={{
					paddingHorizontal: 30,
					paddingBottom: 20,
				}}
			>
				<ThemeText variant="h1" numberOfLines={1} adjustsFontSizeToFit>
					{formula}
				</ThemeText>
				{formula === prevNumber ? (
					<ThemeText variant="h2"> </ThemeText>
				) : (
					<ThemeText variant="h2">{prevNumber}</ThemeText>
				)}
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton blackText color="lightGray" onPress={clear}>
					C
				</CalculatorButton>
				<CalculatorButton blackText color="lightGray" onPress={toggleSign}>
					+/-
				</CalculatorButton>
				<CalculatorButton blackText color="lightGray" onPress={deleteLast}>
					del
				</CalculatorButton>
				<CalculatorButton color="orage" onPress={divideOperation}>
					÷
				</CalculatorButton>
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton onPress={() => buildNumber('7')}>7</CalculatorButton>
				<CalculatorButton onPress={() => buildNumber('8')}>8</CalculatorButton>
				<CalculatorButton onPress={() => buildNumber('9')}>9</CalculatorButton>
				<CalculatorButton color="orage" onPress={multiplyOperation}>
					×
				</CalculatorButton>
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton onPress={() => buildNumber('4')}>4</CalculatorButton>
				<CalculatorButton onPress={() => buildNumber('5')}>5</CalculatorButton>
				<CalculatorButton onPress={() => buildNumber('6')}>6</CalculatorButton>
				<CalculatorButton color="orage" onPress={addOperation}>
					+
				</CalculatorButton>
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton onPress={() => buildNumber('1')}>1</CalculatorButton>
				<CalculatorButton onPress={() => buildNumber('2')}>2</CalculatorButton>
				<CalculatorButton onPress={() => buildNumber('3')}>3</CalculatorButton>
				<CalculatorButton color="orage" onPress={subtractOperation}>
					-
				</CalculatorButton>
			</View>
			<View style={globalStyles.row}>
				<CalculatorButton col={2} onPress={() => buildNumber('0')}>
					0
				</CalculatorButton>
				<CalculatorButton onPress={() => buildNumber('.')}>.</CalculatorButton>
				<CalculatorButton color="orage" onPress={calculateResult}>
					=
				</CalculatorButton>
			</View>
		</View>
	);
};

export default CalculetorApp;
