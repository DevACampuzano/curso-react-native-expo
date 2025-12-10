import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';

export const globalStyles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	calculatorContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingBottom: 20,
	},
	mainResult: {
		fontSize: 70,
		textAlign: 'right',
		fontWeight: 400,
		color: Colors.textPrimary,
	},
	subResult: {
		fontSize: 40,
		textAlign: 'right',
		fontWeight: 300,
		color: Colors.textSecondary,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 18,
		paddingHorizontal: 10,
	},
	botton: {
		height: 80,
		width: 80,
		backgroundColor: Colors.darkGray,
		borderRadius: 100,
		justifyContent: 'center',
		marginHorizontal: 10,
	},
	buttonText: {
		textAlign: 'center',
		padding: 10,
		fontSize: 30,
		color: Colors.textPrimary,
		fontWeight: 300,
		fontFamily: 'SpaceMono',
	},
});
