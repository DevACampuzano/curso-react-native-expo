import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
	const animaredOpacity = useRef(new Animated.Value(0)).current;
	const animaredPosition = useRef(new Animated.Value(-100)).current;

	const fadeIn = ({
		duration = 300,
		toValue = 1,
		useNativeDriver = true,
		easing = Easing.linear,
		callback = () => {},
	}) => {
		Animated.timing(animaredOpacity, {
			duration,
			useNativeDriver,
			toValue,
			easing,
		}).start(callback);
	};

	const startMovingTopPosition = ({
		duration = 700,
		toValue = 0,
		useNativeDriver = true,
		easing = Easing.linear,
		callback = () => {},
	}) => {
		Animated.timing(animaredPosition, {
			duration,
			useNativeDriver,
			toValue,
			easing,
		}).start(callback);
	};

	const fadeOut = ({
		duration = 300,
		toValue = 0,
		useNativeDriver = true,
		easing = Easing.ease,
		callback = () => {},
	}) => {
		Animated.timing(animaredOpacity, {
			duration,
			useNativeDriver,
			toValue,
			easing,
		}).start(callback);
	};

	return {
		fadeIn,
		fadeOut,
		startMovingTopPosition,
		animaredOpacity,
		animaredPosition,
		Animated,
	};
};
