import moment from "moment-es6";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  const [dateInfo, setDateInfo] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => setDateInfo(moment()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const dayString = dateInfo.format("dddd");
  const dateString = `${dateInfo.format("MMMM DD, YYYY")}`;

  return (
    <TodoHeadBlock>
      <DayText>{dayString}</DayText>
      <DateText>{dateString}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
