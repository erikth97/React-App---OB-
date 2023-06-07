import React, { useState, useEffect} from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    
    // Estado del componente
    const [task, setTask] = useState([defaultTask]);
    const [loading, setLoading] = useState(false)


    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...')
        };
    }, [task]);


    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                      {/* Card Header {title} */}
                     <div className='card-header p-3'>
                        <h5>
                            Your Task:
                        </h5>
                     </div>
                     {/*  Card Body {content} */}
                     <div className='card-body'>

                     </div>
               </div> 
               
            </div>
            {/*  TODO Aplicar un For/Map paa renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;


