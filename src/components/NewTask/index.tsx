import {
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';


type Props = {
  taskDescryption: string;
  setTaskDescryption: (taskDescryption: string) => void;
  addNewTask: () => void;
}

export function NewTask({ 
  taskDescryption, 
  setTaskDescryption,
  addNewTask
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        value={taskDescryption}
        onChangeText={setTaskDescryption}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => addNewTask()}
      >
        <Ionicons name='add-circle-outline' color={'#F2F2F2'} size={20}/>
      </TouchableOpacity>
    </View>
  );
}