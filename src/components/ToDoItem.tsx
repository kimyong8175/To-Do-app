import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6b6b;
  font-size: 24px;
  cursor: pointer;
`;

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 24px;
  /* font-weight: 400; */
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

interface Props {
  id?: number;
  done: boolean;
  text: string;
}

const ToDoItem = ({ id, done, text }: Props) => {
  return (
    <TodoItemContainer>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemContainer>
  );
};

export default ToDoItem;
