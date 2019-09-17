import {useState,useEffect} from 'react';
import { firebase} from './firebase';

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
    '==', moment().format("DD/MM/YYYY")
))
: selectedProject === 'INBOX' || selectedProject === 0 
? (unsubscribe = unsubscribe.where)

    }, []);
}