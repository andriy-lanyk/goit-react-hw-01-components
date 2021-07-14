import React from "react";
import { Profile } from "../Task1/Profile/Profile";
import { Statistics } from "../Task2/Section/Section";
import { FriendList } from "../Task3/FriendList/FriendList";
import { TransactionHistory } from "../Task4/TransactionsHistory/TransactionsHistory";
import user from "../../data/user.json";
import transactions from "../../data/transactions.json";
import { Wrapper } from "./App.styles";

const App = () => {
  return (
    <Wrapper>
      <Profile user={user} />
      <Statistics />
      <FriendList />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
};

export default App;
