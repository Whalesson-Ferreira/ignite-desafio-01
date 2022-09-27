import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    marginTop: 54,
    flex: 1
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  tasksContainer: {
    flex: 1,
    marginTop: 20,
  },
  tasksContent: {
    paddingBottom: 48
  },
  listEmptyComponent: {
    flex: 1,
    borderTopColor: '#333',
    borderTopWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 48,
  },
  text: {
    marginTop: 16,
    color: '#808080',
    fontSize: 14,
    fontWeight: '700'
  },
  subText: {
    color: '#808080',
    fontSize: 14,
  }
});