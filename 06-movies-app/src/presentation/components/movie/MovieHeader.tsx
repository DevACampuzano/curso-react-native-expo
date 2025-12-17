import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import {
	Image,
	Pressable,
	Text,
	useWindowDimensions,
	View,
} from 'react-native';

interface Props {
	id: number;
	poster: string;
	originalTitle: string;
	title: string;
}

const MovieHeader: React.FC<Props> = ({ poster, originalTitle, title }) => {
	const { height } = useWindowDimensions();
	return (
		<>
			<LinearGradient
				colors={['rgba(0,0,0,0.3)', 'transparent']}
				style={{
					height: height * 0.7,
					position: 'absolute',
					zIndex: 1,
					width: '100%',
				}}
				start={[0, 0.5]}
			/>
			<View className="absolute top-14 left-5 z-50">
				<Pressable onPress={() => router.back()}>
					<Ionicons
						name="arrow-back"
						size={32}
						color="white"
						className="shadow"
					/>
				</Pressable>
			</View>
			<View
				className="shadow-xl shadow-black/20"
				style={{ height: height * 0.7 }}
			>
				<View className="flex-1 rounded-b-[25px] overflow-hidden">
					<Image
						resizeMode="cover"
						source={{ uri: poster }}
						className="flex-1"
					/>
				</View>
			</View>
			<View className="px-5 pt-5">
				<Text className="text-lg text-gray-500 font-normal">
					{originalTitle}
				</Text>
				<Text className="text-2xl font-semibold">{title}</Text>
			</View>
		</>
	);
};

export default MovieHeader;
