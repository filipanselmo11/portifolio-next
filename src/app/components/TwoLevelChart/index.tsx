"use client";

import { PureComponent, ReactNode } from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Cell, Label } from "recharts";

interface TwoLevelCharProps {
  data1: {
    name: string;
    value: number;
  }[];
  // fill1: string;
  colors: string[];
}

export default class TwoLevelChart extends PureComponent<TwoLevelCharProps> {
  render(): ReactNode {
    const { data1, colors } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={700} height={700}>
          <Pie
            data={data1}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            label={({ name, value }) => `${name}: ${value}`}
          >
            {data1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}/>
            ))}
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
