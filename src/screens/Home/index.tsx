import { useState } from 'react';
import { View, Keyboard, Alert } from 'react-native';
import { Header } from '../../components/Header';
import { TasksSection } from '../../components/TasksSection';

import { styles } from './styles';

import { TaskType } from '../../components/Task';

export function Home() {

  const [taskDescryption, setTaskDescryption] = useState('');
  const [tasksList, setTasksList] = useState<TaskType[]>([]);

  function addNewTask() {
    const newTask: TaskType = {
      id: tasksList.length + 1,
      status: 'criada',
      descryption: taskDescryption
    };
    setTasksList(prevState => [...prevState, newTask]);
    setTaskDescryption('');
    Keyboard.dismiss();
  }

  function verifyInpuData() {
    if(taskDescryption === '') {
      return;
    }
    if(tasksList.find((item) => item.descryption.trimEnd() === taskDescryption.trimEnd())) {
      
      return Alert.alert(
        'Atenção',
        'Você já adicionou uma tarefa com este mesmo nome, deseja adicionar outra mesmo assim?',
        [
          {
            text: 'Sim',
            onPress: () => addNewTask()
          },
          {
            text: 'Não',
            style: 'cancel'
          }
        ]
        );
    }
    addNewTask();
    
  }

  function updateTaskStatus(taskId: number) {
    let currentTask = tasksList.find((item) => item.id === taskId) as TaskType;
    
    currentTask = {
      ...currentTask,
      status: currentTask.status === 'criada' ? 'concluida' : 'criada'
    }
    const createdTaskList = tasksList.filter((item) => item.id !== taskId && item.status === 'criada');
    const completeTaskList = tasksList.filter((item) => item.id !== taskId && item.status === 'concluida');
     
    if(currentTask?.status === 'concluida') {
      const newTaskList:TaskType[] = [
        ...createdTaskList,
        ...completeTaskList,
        currentTask
      ];
      setTasksList(newTaskList);
    }
    else if(currentTask?.status === 'criada') { //status changed to 'criada'
      const newTaskList:TaskType[] = [
        ...createdTaskList,
        currentTask,
        ...completeTaskList
      ];
      setTasksList(newTaskList);
    }
  }

  function removeTask(taskId: number) {
    const newTaskList = tasksList.filter((item) => item.id !== taskId);

    newTaskList.forEach((item) => {
      if(item.id === tasksList.length) {
        item.id = taskId;
      }
    })
    setTasksList(newTaskList);
    Alert.alert(
      'Removido',
      `A tarefa foi removida.`,
      [
        {
          text: 'Ok'
        }
      ],
      {
        cancelable: true
      }
      )
  }
  
  return (
    <View style={styles.container}>
      <Header 
        taskDescryption={taskDescryption}
        setTaskDescryption={setTaskDescryption}
        addNewTask={verifyInpuData}
      />
      <TasksSection 
        tasksList={tasksList}
        updateTaskStatus={updateTaskStatus}
        removeTask={removeTask}
      />
    </View>
  );
}