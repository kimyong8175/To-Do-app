import styled from "styled-components";
import { ReactNode } from "react";

const ToDoContainer = styled.div`
  width: 600px;
  height: 750px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

type Props = {
  children: ReactNode;
};

const ToDoListPage = ({ children }: Props) => {
  return <ToDoContainer>{children}</ToDoContainer>;
};

export default ToDoListPage;
