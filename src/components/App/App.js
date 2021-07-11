import React from "react";
import { Profile } from "../Task1/Profile/Profile";
import { Statistics } from "../Task2/Section/Section";
import user from "../../data/user.json";
import { Wrapper } from "./App.styles";

const App = () => {
  return (
    <Wrapper>
      <Profile user={user} />
      <Statistics />
    </Wrapper>
  );
};

export default App;
