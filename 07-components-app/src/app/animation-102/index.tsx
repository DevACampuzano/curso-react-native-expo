import { useRef } from 'react';
import { Animated, PanResponder, View } from 'react-native';

const Animation102Screen = () => {
	const pan = useRef(new Animated.ValueXY()).current;

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: Animated.event(
			[
				null,
				{
					dx: pan.x,
					dy: pan.y,
				},
			],
			{ useNativeDriver: false },
		),
		onPanResponderRelease: () => {
			Animated.spring(pan, {
				toValue: { x: 0, y: 0 },
				useNativeDriver: false,
			}).start();
		},
	});

	return (
		<View className="flex-1 items-center justify-center">
			<Animated.View
				{...panResponder.panHandlers}
				className="bg-[#61dafb] h-32 w-32 rounded-md"
				style={[pan.getLayout()]}
			/>
		</View>
	);
};
export default Animation102Screen;
