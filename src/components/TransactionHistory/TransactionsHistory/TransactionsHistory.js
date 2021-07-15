import React from "react";
import PropTypes from "prop-types";
import { TableHead } from "../TableHead/TableHead";
import { TableBody } from "../TableBody/TableBody";
import { TransactionsTable } from "../TransactionsHistory/TransactionsHistory.styled";

export const TransactionHistory = ({ items }) => {
  const [, type, amount, currency] = Object.keys(items[0]);

  return (
    <TransactionsTable>
      <TableHead type={type} amount={amount} currency={currency} />
      <TableBody transactions={items} />
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
