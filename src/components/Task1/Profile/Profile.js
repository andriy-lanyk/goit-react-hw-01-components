import React from "react";
import { Client } from "../Client/Client";
import { TagList } from "../TagList/TagList";
import PropTypes from "prop-types";
import { ProfileContainer } from "./Profile.styles";

export const Profile = ({ user }) => {
  const { avatar, name, tag, location, stats } = user;
  return (
    <ProfileContainer>
      <Client avatar={avatar} name={name} tag={tag} location={location} />
      <TagList stats={stats} />
    </ProfileContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
