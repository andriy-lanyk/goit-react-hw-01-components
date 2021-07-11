import React from "react";
import { Profile } from "../Task1/Profile/Profile";
import user from "../../data/user.json";
import { Wrapper } from "./App.styles";

const App = () => {
  return (
    <Wrapper>
      <Profile user={user} />
    </Wrapper>
  );
};

export default App;
