import {
  View,
  Image,
} from 'react-native';
import { NewTask } from '../NewTask';

import { styles } from './styles';

type Props = {
  taskDescryption: string;
  setTaskDescryption: (taskDescryption: string) => void;
  addNewTask: () => void;
}

export function Header({ 
  taskDescryption, 
  setTaskDescryption,
  addNewTask
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />  
      </View>
      <NewTask 
        taskDescryption={taskDescryption}
        setTaskDescryption={setTaskDescryption}
        addNewTask={addNewTask}
      />
    </View>
  );
}