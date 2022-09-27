import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

type Props = {
  taskStatus: 'Criadas' | 'Concluídas';
  taskCounter: number;
}

export function TaskMonitor({ taskStatus, taskCounter }:Props) {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.taskStatus, 
          {
            color: taskStatus === 'Criadas' ? '#4EA8DE' : '#8284FA'
          }]}
        >{taskStatus}</Text>
      <Text style={styles.taskCounter}>{taskCounter}</Text>
    </View>
  );
}