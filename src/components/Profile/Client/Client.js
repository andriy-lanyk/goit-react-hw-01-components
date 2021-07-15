import React from "react";
import PropTypes from "prop-types";
import defaultImg from "./default.jpg";
import {
  ClientLayout,
  ClientImg,
  ClientName,
  ClientTag,
  ClientLocation,
} from "./Client.styles";

export const Client = ({ avatar, name, tag, location }) => {
  return (
    <ClientLayout>
      <ClientImg src={avatar} alt="Аватар пользователя" />
      <ClientName>{name}</ClientName>
      <ClientTag>{tag}</ClientTag>
      <ClientLocation>{location}</ClientLocation>
    </ClientLayout>
  );
};

Client.defaultProps = {
  avatar: defaultImg,
};

Client.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
