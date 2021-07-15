import React from "react";
import PropTypes from "prop-types";
import { StatisticTitle } from "../Title/Title";
import { StatisticList } from "../List/List";
import { SectionWrapper, ListStatistic } from "./Section.styles";

const Statistics = ({ data }) => {
  return (
    <SectionWrapper>
      <StatisticTitle title="Upload stats" />
      <ListStatistic>
        {data.map(({ id, label, percentage }) => (
          <StatisticList key={id} label={label} percentage={percentage} />
        ))}
      </ListStatistic>
    </SectionWrapper>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
};

export { Statistics };
