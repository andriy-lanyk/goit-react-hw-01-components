import React from "react";
import { LabelName } from "../Label/Label";
import { PercentageNumber } from "../Percentage/Percentage";
import { ListStatisticItem } from "./List.styled";

const StatisticList = ({ label, percentage }) => {
  return (
    <ListStatisticItem>
      <LabelName label={label} />
      <PercentageNumber percentage={percentage} />
    </ListStatisticItem>
  );
};

export { StatisticList };
