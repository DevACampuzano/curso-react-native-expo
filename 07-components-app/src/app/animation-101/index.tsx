import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';

const Animation101Screen = () => {
	const {
		Animated,
		fadeIn,
		fadeOut,
		animaredOpacity,
		animaredPosition,
		startMovingTopPosition,
	} = useAnimation();

	return (
		<ThemedView margin className="flex-1 justify-center items-center gap-2">
			<Animated.View
				style={{
					opacity: animaredOpacity,
					transform: [{ translateY: animaredPosition }],
				}}
				className="bg-light-secondary dark:bg-dark-secondary h-28 w-28 rounded-xl"
			/>
			<ThemedButton
				className="my-2"
				onPress={() => {
					fadeIn({});
					startMovingTopPosition({});
				}}
			>
				FadeIn
			</ThemedButton>
			<ThemedButton
				className="my-2"
				onPress={() =>
					fadeOut({
						callback: () => {
							animaredPosition.resetAnimation();
						},
					})
				}
			>
				FadeOut
			</ThemedButton>
		</ThemedView>
	);
};
export default Animation101Screen;
