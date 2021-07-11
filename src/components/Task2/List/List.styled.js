import styled from "@emotion/styled";

const ListStatistic = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  color: white;
`;

function randomColor() {
  return Math.floor(Math.random() * 255 + 1);
}

const ListStatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: center;
  padding: 20px 0;
  background-color: rgb(${randomColor}, ${randomColor}, ${randomColor});
  width: calc(100%);
`;

export { ListStatistic, ListStatisticItem };
