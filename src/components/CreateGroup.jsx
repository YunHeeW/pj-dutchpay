import { CenteredOverlayForm } from "./CenteredOverlayForm";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { groupNameState } from "../state/groupName";
import { useState } from "react";

export const CreateGroup = () => {
  const [groupName, setGroupName] = useRecoilState(groupNameState);
  const [validated, setValidated] = useState(false);
  const [validatedGroupName, setValidatedGroupName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      setValidatedGroupName(true);
    } else {
      e.stopPropagation();
      setValidatedGroupName(false);
    }
    setValidated(true);
  };

  return (
    <div>
      <h1>더치페이</h1>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <h2>그룹 이름</h2>
          </Row>
          <Row>
            <Form.Group controlId="validationGroupName">
              <Form.Control
                type="text"
                required
                placeholder="ex) 치킨먹기"
                onChange={(e) => {
                  setGroupName(e.target.value);
                }}
              />
              <Form.Control.Feedback
                type="invalid"
                data-valid={validatedGroupName}
              >
                이름을 입력하세요
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Button type="submit">저장</Button>
          </Row>
        </Form>
      </Container>
      {/*<CenteredOverlayForm />*/}
    </div>
  );
};
