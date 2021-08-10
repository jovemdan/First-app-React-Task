import Task from "../Task/Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  console.log(tasks);
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};
export default Tasks;
