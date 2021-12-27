import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <h3>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "poiner" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
