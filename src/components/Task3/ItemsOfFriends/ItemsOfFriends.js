import React from "react";
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
