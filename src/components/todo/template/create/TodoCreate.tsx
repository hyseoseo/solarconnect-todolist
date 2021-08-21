import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker, Modal } from "antd";
import moment from "moment-es6";
import { Itodo } from "../../TodoService";

const CircleButton = styled.button<{ open: boolean }>`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 70%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId,
}: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [deadlineMoment, setDeadlineMoment] = useState<moment.Moment | null>(
    moment()
  );

  const handleToggle = () => setOpen(!open);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지

    if (!value) {
      const modal = Modal.warning({
        content: "할 일을 입력해주세요!",
      });
      setTimeout(() => modal.destroy(), 1200);
      return;
    }

    if (deadlineMoment?.isBefore(moment(), "day")) {
      const modal = Modal.warning({
        content: "오늘 이후의 날짜를 입력해주세요!",
      });
      setTimeout(() => modal.destroy(), 1200);
      return;
    }

    createTodo({
      id: nextId,
      text: value,
      done: false,
      deadline: deadlineMoment?.format("DD MMM YYYY"),
    });
    incrementNextId(); // nextId 하나 증가

    setValue(""); // input 초기화
    setDeadlineMoment(moment()); // deadline 초기화
    setOpen(false);
  };

  const onDateChange = (date: moment.Moment | null, dateStr: string): void => {
    setDeadlineMoment(date);
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
          />
          <DatePicker
            onChange={onDateChange}
            defaultValue={moment()}
            format="DD MMM YYYY"
            value={deadlineMoment}
          />
          <CircleButton onClick={handleToggle} open={open}>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
