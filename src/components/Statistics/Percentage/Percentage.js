import React from "react";
import PropTypes from "prop-types";
import { Percentage } from "./Percentage.styled";

export const PercentageNumber = ({ percentage }) => {
  return <Percentage>{percentage}%</Percentage>;
};

PercentageNumber.propTypes = {
  percentage: PropTypes.number.isRequired,
};
