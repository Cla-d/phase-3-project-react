import React from 'react';

function TaskList({tasks}){
    const showTasks = tasks.map((task)=>{
        return <h1>task.name</h1>
    })
    return (
        <div>
            {showTasks}
        </div>
    );
}

export default TaskList;