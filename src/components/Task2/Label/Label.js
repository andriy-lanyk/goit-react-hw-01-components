import React from "react";
import PropTypes from "prop-types";
import { Label } from "./Label.styled";

export const LabelName = ({ label }) => {
  return <Label>{label}</Label>;
};

LabelName.propTypes = {
  label: PropTypes.string.isRequired,
};
