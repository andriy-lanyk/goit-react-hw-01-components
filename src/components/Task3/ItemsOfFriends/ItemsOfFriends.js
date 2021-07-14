import React from "react";
import PropTypes from "prop-types";
import {
  ItemOfFriends,
  StatusItem,
  AvatarFriend,
  NameFriend,
} from "./ItemsOfFriends.styled";

export const ItemsOfFriends = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <ItemOfFriends key={id}>
      <StatusItem status={isOnline}></StatusItem>
      <AvatarFriend src={avatar} alt={name} width="48" />
      <NameFriend>{name}</NameFriend>
    </ItemOfFriends>
  ));
};

ItemsOfFriends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
