import type { FC } from 'react';
import { Pressable, type PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
	children: string;
	color?: 'primary' | 'secondary' | 'tertiary';
	variant?: 'contained' | 'text-only';
}

const CustomButton: FC<Props> = ({
	children,
	color = 'primary',
	variant = 'contained',
	className,
	...props
}) => {
	const btnColor = {
		primary: 'bg-primary',
		secondary: 'bg-secondary',
		tertiary: 'bg-tertiary',
	}[color];

	const textColor = {
		primary: 'text-primary',
		secondary: 'text-secondary',
		tertiary: 'text-tertiary',
	}[color];

	if (variant === 'text-only') {
		return (
			<Pressable className={`p-3 ${className}`} {...props}>
				<Text className={`${textColor} text-center font-work-medium`}>
					{children}
				</Text>
			</Pressable>
		);
	}

	return (
		<Pressable
			className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
			{...props}
		>
			<Text className="text-center font-work-medium text-white">
				{children}
			</Text>
		</Pressable>
	);
};

export default CustomButton;
