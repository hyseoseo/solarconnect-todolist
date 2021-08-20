import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Itodo } from "../../../TodoService";
import moment from "moment";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const Deadline = styled.div<{ done: boolean; passed: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  max-width: 200px;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
  ${(props) =>
    props.passed &&
    !props.done &&
    css`
      color: #e93;
    `}
`;

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const done = todo.done;
  const handleToggle = () => {
    toggleTodo(todo.id);
  };
  const handleRemove = () => {
    removeTodo(todo.id);
  };
  const deadline = todo.deadlineMoment.format("DD MMM YYYY");

  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (todo.deadlineMoment.isBefore(moment())) {
      setPassed(true);
    }
  }, [todo]);

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text done={done}>{todo.text}</Text>
      <Deadline done={done} passed={passed}>
        {deadline}
      </Deadline>
      <Remove onClick={handleRemove}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
