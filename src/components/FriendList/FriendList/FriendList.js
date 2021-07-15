import React from "react";
import PropTypes from "prop-types";
import { ItemsOfFriends } from "../ItemsOfFriends/ItemsOfFriends";
import { ListOfFriends } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <ItemsOfFriends
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
