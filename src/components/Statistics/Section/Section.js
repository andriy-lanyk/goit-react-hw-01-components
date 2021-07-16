import React from "react";
import PropTypes from "prop-types";
// import { StatisticTitle } from "../Title/Title";
import { StatisticList } from "../List/List";
import {
  SectionWrapper,
  ListStatistic,
  TitleStatistic,
} from "./Section.styles";

const Statistics = ({ title, stats }) => {
  return (
    <SectionWrapper>
      {title ? <TitleStatistic>{title}</TitleStatistic> : null}
      <ListStatistic>
        {stats.map(({ id, label, percentage }) => (
          <StatisticList key={id} label={label} percentage={percentage} />
        ))}
      </ListStatistic>
    </SectionWrapper>
  );
};

Statistics.defaultProps = {
  title: null,
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export { Statistics };
