import React from "react";
import { HeadOfTable, CellOfHead } from "../TableHead/TableHead.styled";

export const TableHead = ({ type, amount, currency }) => {
  return (
    <HeadOfTable>
      <tr>
        <CellOfHead>{type}</CellOfHead>
        <CellOfHead>{amount}</CellOfHead>
        <CellOfHead>{currency}</CellOfHead>
      </tr>
    </HeadOfTable>
  );
};
