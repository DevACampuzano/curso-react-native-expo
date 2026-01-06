import { TextInput, type TextInputProps } from 'react-native';

interface Props extends TextInputProps {}
const ThemedTextInput: React.FC<Props> = ({ className, ...props }) => {
	return (
		<TextInput
			placeholderTextColor="grey"
			className={`py-4 px-2 text-black dark:text-white ${className}`}
			{...props}
		/>
	);
};

export default ThemedTextInput;
