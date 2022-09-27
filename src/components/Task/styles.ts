import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 12,
		backgroundColor: '#262626',
		borderColor: '#333',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 8
	},
	completeTaskIcon: {
		backgroundColor: '#5E60CE',
		borderRadius: 100,
		padding: 4
	},
	descryption: {
		flex: 1,
		paddingHorizontal: 12,
		fontWeight: '400',
		fontSize: 14,
		color: '#F2F2F2'
	}
});