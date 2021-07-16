import React from "react";
import PropTypes from "prop-types";
import {
  ItemOfFriends,
  StatusItem,
  AvatarFriend,
  NameFriend,
} from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemOfFriends>
      <StatusItem status={isOnline} />
      <AvatarFriend src={avatar} alt={name} width="48" />
      <NameFriend>{name}</NameFriend>
    </ItemOfFriends>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
