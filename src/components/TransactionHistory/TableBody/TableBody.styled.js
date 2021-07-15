import styled from "@emotion/styled";

const BobyStyled = styled.tbody`
  color: #8e8e8e;
  text-transform: capitalize;
`;

const RowOfBody = styled.tr`
  background-color: ${(prop) => (prop.row % 2 === 0 ? "#e2e2e2" : "#ffffff")};
`;

const CellOfBody = styled.td`
  padding: 10px;
  border-right: 1px solid #8e8e8e;
`;

export { BobyStyled, CellOfBody, RowOfBody };
