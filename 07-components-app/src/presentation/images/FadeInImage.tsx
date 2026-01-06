import { useState } from 'react';
import {
	ActivityIndicator,
	Animated,
	type ImageStyle,
	type StyleProp,
	View,
} from 'react-native';
import { useAnimation } from '@/hooks/useAnimation';

interface Props {
	uri: string;
	style?: StyleProp<ImageStyle>;
}
const FadeInImage: React.FC<Props> = ({ uri, style }) => {
	const [loading, setLoading] = useState(true);
	const { animaredOpacity, fadeIn } = useAnimation();
	return (
		<View className="justify-center items-center">
			{loading && (
				<ActivityIndicator
					style={{ position: 'absolute' }}
					color="grey"
					size={30}
				/>
			)}
			<Animated.Image
				source={{ uri }}
				style={[style, { opacity: animaredOpacity }]}
				onLoadEnd={() => {
					fadeIn({
						callback: () => {
							setLoading(false);
						},
					});
				}}
			/>
		</View>
	);
};

export default FadeInImage;
