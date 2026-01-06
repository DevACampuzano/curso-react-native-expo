import { View, type ViewProps } from 'react-native';

const ThemedCard: React.FC<ViewProps> = ({ className, children, ...props }) => {
	return (
		<View
			className={`bg-white dark:bg-black/10 rounded-xl p-2 shadow shadow-black/5 ${className}`}
			{...props}
		>
			{children}
		</View>
	);
};

export default ThemedCard;
