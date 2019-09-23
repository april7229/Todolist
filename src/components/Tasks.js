import React from 'react';
import { collatedTasks } from './constants';

export const Task = () => {
    const Task = [];

    let projectName = '';
 
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