import React from "react";
import PropTypes from "prop-types";
import { LabelName } from "../Label/Label";
import { PercentageNumber } from "../Percentage/Percentage";
import { ListStatistic, ListStatisticItem } from "./List.styled";

const StatisticList = ({ stats }) => {
  return (
    <ListStatistic>
      {stats.map(({ id, label, percentage }) => (
        <ListStatisticItem key={id}>
          <LabelName label={label} />
          <PercentageNumber percentage={percentage} />
        </ListStatisticItem>
      ))}
    </ListStatistic>
  );
};

StatisticList.propTypes = {
  stats: PropTypes.array.isRequired,
};

export { StatisticList };
