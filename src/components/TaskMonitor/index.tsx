import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

type Props = {
  taskStatus: 'Criadas' | 'Concluídas';
}

export function TaskMonitor({ taskStatus }:Props) {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.taskStatus, 
          {
            color: taskStatus === 'Criadas' ? '#4EA8DE' : '#8284FA'
          }]}
          // taskStatus === 'Criadas' ? {color: '#4EA8DE'} : {color: '#8284FA'}]}
        >{taskStatus}</Text>
      <Text style={styles.taskCounter}>0</Text>
    </View>
  );
}