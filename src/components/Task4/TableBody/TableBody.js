import React from "react";
import { BobyStyled, CellOfBody, RowOfBody } from "./TableBody.styled";

export const TableBody = ({ transactions }) => {
  return (
    <BobyStyled>
      {transactions.map(({ id, type, amount, currency }, i) => {
        return (
          <RowOfBody key={id} row={i + 1}>
            <CellOfBody>{type}</CellOfBody>
            <CellOfBody>{amount}</CellOfBody>
            <CellOfBody>{currency}</CellOfBody>
          </RowOfBody>
        );
      })}
    </BobyStyled>
  );
};
