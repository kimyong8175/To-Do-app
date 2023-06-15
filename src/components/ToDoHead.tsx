import styled from "styled-components";
import CreateCategory from "./CreateCategory";

const HeadContainer = styled.div`
  padding-top: 30px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 34px;
  color: #343a40;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToDoHead = () => {
  return (
    <HeadContainer>
      <H1>TO DOs</H1>
      <CreateCategory />
    </HeadContainer>
  );
};

export default ToDoHead;
