import { useContext } from 'react';
import { TodoContext } from '../context';
import '../styles/Counter.css';



const Counter = () => {
  const { totalTodos: total, completedTodos: completed } = useContext(TodoContext)
  return <div>
    <h1 className="Counter">Has completado {completed} de {total} tareas</h1>
  </div>;
};

export default Counter;
