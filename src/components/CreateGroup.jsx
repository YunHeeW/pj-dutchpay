import { CenteredOverlayForm } from "./shared/CenteredOverlayForm";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { groupNameState } from "../state/groupName";
import { useState } from "react";
import styled from "styled-components";

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
    <CenteredOverlayForm>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <StyledRow>
            <Row className="align-items-start">
              <StyledH2>그룹의 이름을 정해주세요</StyledH2>
            </Row>
            <Row className="align-items-center">
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
            <Row className="align-items-end">
              <StyledSubmitButton>저장</StyledSubmitButton>
            </Row>
          </StyledRow>
        </Form>
      </Container>
    </CenteredOverlayForm>
  );
};

const StyledH2 = styled.h2`
  text-align: center;
  overflow-wrap: break-word;
  word-break: keep-all;
  font-weight: 700;
`;

const StyledSubmitButton = styled(Button).attrs({
  type: "submit",
})`
  background: #5c8aff;
  border-radius: 8px;
  border: none;
  :hover {
    background: #5c8aff;
    filter: brightness(90%);
  }
`;

const StyledRow = styled(Row)`
  height: 60vh;
  align-items: center;
  justify-content: center;
`;
