import { View } from 'react-native';
import { Header } from '../../components/Header';
import { Task } from '../../components/Task';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Task />
    </View>
  );
}