import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Task({ task, onDelete, toggleReminder }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "poiner" }}
        />
      </h3>
      <p>{task.day}</p>
      <p>
        <Link to={`/task/${task.id}`}> View Details</Link>
      </p>
    </div>
  );
}

export default Task;
