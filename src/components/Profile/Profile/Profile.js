import React from "react";
import { Client } from "../Client/Client";
import { TagList } from "../TagList/TagList";
import { ProfileContainer } from "./Profile.styles";

export const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <ProfileContainer>
      <Client avatar={avatar} name={name} tag={tag} location={location} />
      <TagList stats={stats} />
    </ProfileContainer>
  );
};
