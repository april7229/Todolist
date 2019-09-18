import {useState,useEffect} from 'react';
import { firebase} from './firebase';
import { collatedTasksExist } from '../helpers';
import moment from 'moment';
const collatedTasks = () => {};

export const useTasks = selectedProject => {
    const [task, setTasks] = useState ([]);

    useEffect(() =>{
let unsubscribe = firebase
.firestore()
.collection('tasks' )
.where('userId', '==', 'QXroWFv6xrSPP8hSkHWK');

unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ? (unsubscribe.where('projectId', '==', selectedProject) ) : selectedProject === 'TODAY'
? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
: selectedProject === 'TODAY'
?(unsubscribe = unsubscribe.where(
    'date',
    '==',
    moment().format("DD/MM/YYYY")
))
: selectedProject === 'INBOX' || selectedProject === 0 
? (unsubscribe = unsubscribe.where('date', '==', ''))
: unsubscribe;

unsubscribe = unsubscribe.onSnapshot(snapshot => {
    const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),

    }));

    setTasks(
        selectedProject === 'NEXT_7'
        ? newTasks.filter(
            task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 
            'days') <= 7 && task.archived !==true
            )
: newTasks.filter(task => task.archived !==true)

        )


    )

    }, 
};