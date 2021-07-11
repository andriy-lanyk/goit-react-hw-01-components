import React from "react";
import PropTypes from "prop-types";
import friends from "../../../data/friends.json";
import { FriendListItem } from "../FriendListItem/FriendListItem";
console.log("friends: ", friends);

export const FriendList = () => {
  return (
    <FriendList>
      <ul>
        <FriendListItem friends={friends} />
      </ul>
    </FriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
