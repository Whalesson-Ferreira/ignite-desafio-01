import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 54
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  
  tasks: {
    borderTopColor: '#333',
    borderTopWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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