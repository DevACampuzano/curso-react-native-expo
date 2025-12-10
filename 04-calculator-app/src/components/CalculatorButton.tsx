import * as Haptics from 'expo-haptics';
import type { FC } from 'react';
import { Pressable, type PressableProps, Text } from 'react-native';
import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';

interface CalculatorButtonProps extends PressableProps {
	color?: keyof typeof Colors;
	col?: number;
	blackText?: boolean;
	children: string;
}

const CalculatorButton: FC<CalculatorButtonProps> = ({
	children,
	color = 'darkGray',
	blackText = false,
	col = 1,
	onPress,
	...props
}) => {
	return (
		<Pressable
			style={({ pressed }) => ({
				...globalStyles.botton,
				backgroundColor: Colors[color],
				opacity: pressed ? 0.8 : 1,
				width: 80 * col + (col - 1) * 20,
			})}
			{...props}
			onPress={(e) => {
				Haptics.selectionAsync();
				onPress?.(e);
			}}
		>
			<Text
				style={{
					...globalStyles.buttonText,
					color: blackText ? 'black' : Colors.textPrimary,
				}}
			>
				{children}
			</Text>
		</Pressable>
	);
};

export default CalculatorButton;
