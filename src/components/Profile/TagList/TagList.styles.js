import styled from "@emotion/styled";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #e1e8ea;
  list-style: none;
  border-top: 1px solid #a0a0a0;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  color: #a0a0a0;
  border-right: ${(props) =>
    props.border !== "none" ? "1px solid #a0a0a0;" : ";"};
  padding: 20px;
  text-align: center;
  width: 33%;
`;

const ItemNumber = styled.span`
  font-weight: 800;
  margin-top: 15px;
  color: #212121;
`;

export { List, ListItem, ItemNumber };
