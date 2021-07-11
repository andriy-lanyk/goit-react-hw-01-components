import React from "react";
import PropTypes from "prop-types";
import { StatisticTitle } from "../Title/Title";
import { StatisticList } from "../List/List";
import statisticData from "../../../data/statistical.json";
import { SectionWrapper } from "./Section.styles";

const Statistics = () => {
  return (
    <SectionWrapper>
      <StatisticTitle title="Upload stats" />
      <StatisticList stats={statisticData} />
    </SectionWrapper>
  );
};

Statistics.propTypes = {
  statisticData: PropTypes.array,
};

export { Statistics };
