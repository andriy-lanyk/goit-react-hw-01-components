import React from "react";
import PropTypes from "prop-types";
import friends from "../../../data/friends.json";
import { ItemsOfFriends } from "../ItemsOfFriends/ItemsOfFriends";
import { ListOfFriends } from "./FriendList.styled";

export const FriendList = () => {
  return (
    <ListOfFriends>
      <ItemsOfFriends friends={friends} />
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
