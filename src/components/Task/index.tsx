import {
	View,
	Text
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { TaskMonitor } from '../TaskMonitor';

import { styles } from './styles';

export function Task() {
	return (
		<View style={styles.container}>
			<View style={styles.info}>
				<TaskMonitor taskStatus='Criadas'/>
				<TaskMonitor taskStatus='Concluídas'/>
			</View>

			<View style={styles.tasks}>
				<MaterialCommunityIcons name="clipboard-text-outline" size={56} color="#808080" />
				<Text style={styles.text}>
					Você ainda não tem tarefas cadastradas
				</Text>
				<Text style={styles.subText}>
					Crie tarefas e organize seus itens a fazer
				</Text>

			</View>
		</View>
	);
}