import React from 'react';
import { checkbox } from './layout/checkbox';
import {useTasks} from './hooks';

export const Tasks = () => {
    const { Tasks } = useTasks(1);

    console.log(tasks);

    const projectName = '';
 
    return (
        <div className="tasks" data-testid="tasks">

            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map(task => (
              <li key = {`${ task.id }`}>
                  <checkbox id={task.id} />
                  <span>{task.task}</span>
              </li>
                ))}

                </ul>
                </div>
                )
                }