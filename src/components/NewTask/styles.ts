import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
		flexDirection: 'row',

	},
	input: {
		height: 54,
		flex: 1,
		backgroundColor: '#262626',
		fontSize: 16,
		fontWeight: '400',
		borderColor: '#0D0D0D',
		borderWidth: 1,
		borderRadius: 6,
		padding: 16,
		color: '#F2F2F2',
	},
	button: {
		width: 52,
		height: 52,
		backgroundColor: '#1E6F9F',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 6,
		marginLeft: 4,
		// padding: 18
	},
});