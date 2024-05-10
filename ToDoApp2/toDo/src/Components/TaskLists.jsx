import { Container, ListGroup } from "react-bootstrap";
import { DeleteTasks } from "./DeleteTasks";
import './TaskLists.css'

export const TaskLists = ({ backendTasks,tasks, setTasks }) => {
  return (
    <Container>
      <ListGroup>
        {backendTasks.map((task, index) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={index}
          >
            <input type="checkbox" className="mt-4  me-4"   />
            <div className="ms-2 me-auto">
              <div className="fw-bold"><h3>{task.title}</h3></div>
              <div>
              <small>Description: </small>
              {task.description}
              </div>
            </div>
            <DeleteTasks title={task.title} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
