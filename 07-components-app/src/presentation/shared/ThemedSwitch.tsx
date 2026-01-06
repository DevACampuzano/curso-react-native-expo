import { Platform, Pressable, Switch, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from './ThemedText';

interface Props {
	text?: string;
	value: boolean;

	onValueChange: (value: boolean) => void;
	className?: string;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch: React.FC<Props> = ({
	text,
	onValueChange,
	value,
	className,
}) => {
	const switchActiveColor = useThemeColor({}, 'primary');
	return (
		<Pressable
			className={`flex-row items-center justify-between active:opacity-80 ${className}`}
			onPress={() => onValueChange(!value)}
		>
			{text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
			<Switch
				value={value}
				onValueChange={onValueChange}
				thumbColor={isAndroid ? switchActiveColor : ''}
				trackColor={{ false: 'gray', true: switchActiveColor }}
			/>
		</Pressable>
	);
};

export default ThemedSwitch;
