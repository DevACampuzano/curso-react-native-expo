import type { FC } from 'react';
import { Text, type TextProps } from 'react-native';
import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';

interface ThemeTextProps extends TextProps {
	variant?: 'h1' | 'h2';
}

const ThemeText: FC<ThemeTextProps> = ({
	children,
	variant = 'h1',
	...props
}) => {
	return (
		<Text
			style={[
				{ color: Colors.textPrimary, fontFamily: 'SpaceMono' },
				variant === 'h1' && globalStyles.mainResult,
				variant === 'h2' && globalStyles.subResult,
			]}
			{...props}
		>
			{children}
		</Text>
	);
};

export default ThemeText;
