import React from "react";
import PropTypes from "prop-types";

export const FriendListItem = ({ friends }) =>
  friends.map((friend) => (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src="" alt="" width="48" />
      <p class="name"></p>
    </li>
  ));