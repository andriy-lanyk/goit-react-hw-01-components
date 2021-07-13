import React from "react";
import PropTypes from "prop-types";
import friends from "../../../data/friends.json";
import { ItemsOfFriends } from "../ItemsOfFriends/ItemsOfFriends";

export const FriendList = () => {
  return (
    <ul>
      <ItemsOfFriends friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
