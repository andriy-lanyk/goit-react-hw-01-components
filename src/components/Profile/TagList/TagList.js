import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ItemNumber } from "./TagList.styles";

export const TagList = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <List>
      <ListItem>
        <span>Followers</span>
        <ItemNumber>{followers}</ItemNumber>
      </ListItem>
      <ListItem>
        <span>Views</span>
        <ItemNumber>{views}</ItemNumber>
      </ListItem>
      <ListItem border="none">
        <span>Likes</span>
        <ItemNumber>{likes}</ItemNumber>
      </ListItem>
    </List>
  );
};

TagList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
