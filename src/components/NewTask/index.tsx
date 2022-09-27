import {
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export function NewTask() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
      />
      <TouchableOpacity style={styles.button}>
        <Ionicons name='add-circle-outline' color={'#F2F2F2'} size={20}/>
      </TouchableOpacity>
    </View>
  );
}