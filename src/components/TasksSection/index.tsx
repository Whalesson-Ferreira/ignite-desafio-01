import {
	View,
	Text,
	FlatList
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TaskMonitor } from '../TaskMonitor';
import { Task, TaskType } from '../Task';

import { styles } from './styles';

type Props = {
	tasksList: TaskType[];
	updateTaskStatus: (taskId: number) => void;
	removeTask: (taskId: number) => void;
}

export function TasksSection({ tasksList, updateTaskStatus, removeTask }: Props) {
	
	const completeTaskFirst = tasksList.findIndex((item) => item.status === 'concluida');
	return (
		<View style={styles.container}>
			<View style={styles.info}>
				<TaskMonitor 
					taskStatus='Criadas'
					taskCounter={
						completeTaskFirst === -1
						? tasksList.length
						: completeTaskFirst
					}
				/>
				<TaskMonitor 
					taskStatus='Concluídas'
					taskCounter={
						completeTaskFirst === -1
						? 0
						: tasksList.length - completeTaskFirst
					}
				/>
			</View>

			<FlatList 
				style={styles.tasksContainer}
				contentContainerStyle={styles.tasksContent}
				data={tasksList}
				keyExtractor={item => `${item.id}`}
				renderItem={({item}) => (
					<Task 
						key={item.id}
						data={{
							id: item.id,
							status: item.status,
							descryption: item.descryption
						}}
						updateTaskStatus={updateTaskStatus}
						removeTask={removeTask}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<View style={styles.listEmptyComponent}>
						<MaterialCommunityIcons name="clipboard-text-outline" size={56} color="#808080" />
						<Text style={styles.text}>
							Você ainda não tem tarefas cadastradas
						</Text>
						<Text style={styles.subText}>
							Crie tarefas e organize seus itens a fazer
						</Text>
					</View>
				)}
			/>
		</View>
	);
}