import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getDateString } from "../../../../utils/timer-utils";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const [dateInfo, setDateInfo] = useState(getDateString());

  useEffect(() => {
    const timer = setInterval(() => setDateInfo(getDateString()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const dayString = dateInfo.day;
  const dateString = `${dateInfo.month} ${dateInfo.date}, ${dateInfo.year}`;

  return (
    <TodoHeadBlock>
      <DayText>{dayString}</DayText>
      <DateText>{dateString}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
