import React from "react";
import PropTypes from "prop-types";
import { TitleStatistic } from "./Title.styled";

const StatisticTitle = ({ title }) => {
  return title ? <TitleStatistic>{title}</TitleStatistic> : null;
};

StatisticTitle.propTypes = {
  title: PropTypes.string,
};

export { StatisticTitle };
