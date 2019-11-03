import { Svg } from 'cx/svg';
import { Chart, LineGraph, Gridlines, TimeAxis, NumericAxis } from 'cx/charts';
import DashboardWidget from '../DashboardWidget';

const ideal = [];
const actual = [];
const tasks = 30;

const day = 24 * 60 * 60 * 1000;

let startDate = Date.now() - 30 * day;
let remaining = tasks;

for (let i = 0; i < 30; i++) {
    ideal.push({
        date: startDate + i * day,
        tasks: ((30 - i) / 30) * tasks,
    });

    actual.push({
        date: startDate + i * day,
        tasks: remaining,
    });

    remaining -= (6 * (Math.random() - 0.3) * tasks) / 30;
    if (remaining < 0) remaining = 0;
}

export const BurndownChart = ({ width, height }) => (
    <cx>
        <DashboardWidget title="Burndown Chart" width={width} height={height} className="flex-col">
            <Svg style="flex: 1; height: 100%; min-height: 200px; margin: 0.5rem">
                <Chart
                    margin="10 10 25 30"
                    axes={{
                        x: {
                            type: TimeAxis,
                            snapToTicks: false,
                        },
                        y: {
                            type: NumericAxis,
                            vertical: true,
                            snapToTicks: 0,
                        },
                    }}
                >
                    <Gridlines />
                    <LineGraph data={ideal} xField="date" yField="tasks" />

                    <LineGraph data={actual} colorIndex={12} xField="date" yField="tasks" />
                </Chart>
            </Svg>
        </DashboardWidget>
    </cx>
);
