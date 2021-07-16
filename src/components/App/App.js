import React from "react";
import { Profile } from "../Profile/Profile/Profile";
import { Statistics } from "../Statistics/Section/Section";
import { FriendList } from "../FriendList/FriendList/FriendList";
import { TransactionHistory } from "../TransactionHistory/TransactionsHistory/TransactionsHistory";
import user from "../../data/user.json";
import statisticalData from "../../data/statistical.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";
import { Wrapper } from "./App.styles";

const App = () => {
  return (
    <Wrapper>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
};

export default App;
