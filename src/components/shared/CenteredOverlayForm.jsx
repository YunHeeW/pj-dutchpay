import { Container } from "react-bootstrap";
import styled from "styled-components";
import { OverlayWrapper } from "./OverlayWrapper";
export const CenteredOverlayForm = ({ children }) => {
  return (
    <CentralizedContainer>
      <StyledH1>더치페이</StyledH1>
      <OverlayWrapper>{children}</OverlayWrapper>
    </CentralizedContainer>
  );
};

const CentralizedContainer = styled(Container)`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 10px;
  width: 50vw;
`;

const StyledH1 = styled.h1`
  text-align: center;
  overflow-wrap: break-word;
  word-break: keep-all;
  font-weight: 200;
  color: #5c8aff;
  letter-spacing: 5px;
`;
