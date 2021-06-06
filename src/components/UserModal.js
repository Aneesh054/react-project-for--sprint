import { Button, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRefUser } from "../redux/UserReducer";

export function UserModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefUser({}));
  };

  return (
    <Modal show={state.user.refuser.id} onHide={() => updateRefObj()}>
      <Modal.Header closeButton>
        <Modal.Title>Hello, {state.user.refuser.userName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            First Name - {state.user.refuser.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            Last Name - {state.user.refuser.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            User Name - {state.user.refuser.userName}
          </ListGroup.Item>
          <ListGroup.Item>Password - {"*********"}</ListGroup.Item>
          <ListGroup.Item>Email - {"******@gmail.com"}</ListGroup.Item>
          <ListGroup.Item>
            Mobile - {state.user.refuser.mobile}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => updateRefObj()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
