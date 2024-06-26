import { Container, ListGroup } from "react-bootstrap";
import { DeleteTasks } from "./DeleteTasks";
import "./TaskLists.css";
import { UpDateTask } from "./UpDateTask";

export const TaskLists = ({ backendTasks, setRefresh }) => {
  return (
    <Container>
      <ListGroup>
        {backendTasks.map((task, index) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={index}
          >
            <input type="checkbox" className="mt-4  me-4" />
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <h3>{task.title}</h3>
              </div>
              <div>
                <small>Description: </small>
                {task.description}
              </div>
            </div>
            <div>
              <UpDateTask  setRefresh={setRefresh}/>
              <DeleteTasks title={task.title} setRefresh={setRefresh} />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
