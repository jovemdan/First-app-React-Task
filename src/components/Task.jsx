import './Task.css'
const Task = ({task}) => {
  return <div className="task-container">{task.title}</div>;
};
 
export default Task ;