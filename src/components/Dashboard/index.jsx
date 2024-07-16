import React from "react";
import { Home } from "../../HomeLayout";
import { Button, Flex, Statistic } from "antd";
import {
  ChartCard,
  ChartWrapper,
  DashBoardContent,
  DashBoardWrapper,
  InfoCard,
} from "./style";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export const Dashboard = () => {
  return (
    <Home>
      <InfoCard>
        <DashBoardWrapper>
          <DashBoardContent>
            <div>
              <Statistic title="Active Users" value={112893} />
            </div>
            <div>
              <Statistic
                title="Account Balance (CNY)"
                value={112893}
                precision={2}
              />
            </div>
          </DashBoardContent>
          <ChartWrapper>
            <ChartCard>
              <Bar
                data={{
                  labels: ["A", "B", "C", "D", "E"],
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: [12, 19, 3, 5, 2],
                    },
                  ],
                }}
              />
            </ChartCard>
          </ChartWrapper>
        </DashBoardWrapper>
        <DashBoardWrapper>
          <DashBoardContent>
            <div>
              <Statistic title="Active Users" value={112893} />
            </div>
            <div>
              <Statistic
                title="Account Balance (CNY)"
                value={112893}
                precision={2}
              />
            </div>
          </DashBoardContent>
          <ChartWrapper>
            <ChartCard>
              <Bar
                data={{
                  labels: ["A", "B", "C", "D", "E"],
                  datasets: [
                    {
                      label: "My First Dataset",
                      data: [12, 19, 3, 5, 2],
                    },
                  ],
                }}
              />
            </ChartCard>
          </ChartWrapper>
        </DashBoardWrapper>
      </InfoCard>
    </Home>
  );
};
