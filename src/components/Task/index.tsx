import { 
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';

export type TaskType = {
  id: number;
  status: 'criada' | 'concluida';
  descryption: string;
}

type Props = {
  data: TaskType;
  updateTaskStatus: (taskId: number) => void;
  removeTask: (taskId: number) => void;
}

export function Task({ data, updateTaskStatus, removeTask }: Props) {
  
  const { id, status, descryption } = data;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => updateTaskStatus(data.id)}
      >
        {
          status === 'criada'
          ?
          <MaterialCommunityIcons 
            name="checkbox-blank-circle-outline" 
            size={24} 
            color="#4EA8DE" 
          />
          :
          <MaterialCommunityIcons 
            name="check" 
            size={16 } 
            color="#FFF"
            style={styles.completeTaskIcon}
          />
        }
      </TouchableOpacity>
      <Text 
        style={[styles.descryption, 
          status === 'concluida' ? {
            textDecorationLine: 'line-through',
            color: '#808080'
          } : {}
        ]}
        onPress={() => updateTaskStatus(data.id)}
      >
        {descryption}
      </Text>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Cuidado', 
            `Você está tentando remover a seguinte tarefa: \n\n- ${descryption}\n\nTem certeza disso?
            `,
            [
              {
                text: 'Sim',
                onPress: () => removeTask(data.id),
                style: 'destructive'
              },
              {
                text: 'Não',
                style: 'cancel'
              }
            ]
            )
        }}
      >
        <MaterialCommunityIcons 
          name="trash-can-outline" 
          size={24} 
          color="#808080" 
        />
      </TouchableOpacity>
    </View>
  );
}