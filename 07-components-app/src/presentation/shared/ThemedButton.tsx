import { Pressable, type PressableProps, Text } from 'react-native';

type Props = PressableProps & {
	children: string;
};

const ThemedButton: React.FC<Props> = ({ children, className, ...props }) => {
	return (
		<Pressable
			{...props}
			className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-6 active:opacity-80 ${className}`}
		>
			<Text className="text-white text-2xl">{children}</Text>
		</Pressable>
	);
};

export default ThemedButton;
