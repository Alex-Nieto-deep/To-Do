import '../styles/Counter.css'


const Counter = ({ total, completed }) => {
  console.log(total);
  return <div>
    <h1 className="Counter">Has completado {completed} de {total} tareas</h1>
  </div>;
};

export default Counter;
