import { useEffect, useState } from 'react';

const TaskForm = ({task}) => {
    const [value, setValue] = useState(task.text);
    const [taskText, setTaskText] = useState(task.text);
    const [isChecked, setIsChecked] = useState(task.checked);

    useEffect(() => {
        fetch(`http://localhost:3001/todo/${task.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "text": value,
                "checked": isChecked
            })
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [taskText, isChecked])

    const handleDeleteTask = () => {
        fetch(`http://localhost:3001/todo/${task.id}`, {
            method: 'DELETE'
        }).then(res => {
            console.log(res);
            window.location.reload();
        }).catch(err => console.log(err));
    }

    return (
        <>
            <input type='checkbox'
                onChange={() => setIsChecked(prev => !prev)}
                checked={isChecked}
            />
            <input type="text"
                placeholder='please input text me!'
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        if (value === '') {
                          handleDeleteTask();  
                        } else setTaskText(value);
                    }        
                }}
            />
        </>
    )
}
export default function Routine() {
    const [routine, setRoutine] = useState('');
    const [tasks, setTasks] = useState([]);
    // const [data, setData] = useState(null);

    const handleCreateButton = () => {
        fetch('http://localhost:3001/todo', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                "text": "New Task",
                "checked": false
            })
        })
        .then(res => {
            console.log(res)
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        fetch('http://localhost:3001/todo')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setTasks(json)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h1>Routine Set</h1>
            <h2>Morning (wakeup - 12:00PM)</h2>
            <button onClick={handleCreateButton}>+</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <TaskForm task={task} />
                    </li>
                ))}
            </ul>
        </>
    );
}