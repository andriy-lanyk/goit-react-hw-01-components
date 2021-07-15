import React from "react";
import PropTypes from "prop-types";
import {
  ItemOfFriends,
  StatusItem,
  AvatarFriend,
  NameFriend,
} from "./ItemsOfFriends.styled";

export const ItemsOfFriends = ({ avatar, name, isOnline }) => {
  return (
    <ItemOfFriends>
      <StatusItem status={isOnline}></StatusItem>
      <AvatarFriend src={avatar} alt={name} width="48" />
      <NameFriend>{name}</NameFriend>
    </ItemOfFriends>
  );
};

ItemsOfFriends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
