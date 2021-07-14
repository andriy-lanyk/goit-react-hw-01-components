import React from "react";
import PropTypes from "prop-types";

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

TableHead.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
