"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const data = [
  { name: "1", value: 0.01 },
  { name: "2", value: 0.02 },
  { name: "3", value: 0.05 },
  { name: "4", value: 0.1 },
  { name: "5", value: 0.15 },
  { name: "6", value: 0.18 },
  { name: "7", value: 0.2 },
];
export default function Graph() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis
            domain={[0, 0.2]}
            ticks={[0.0, 0.05, 0.1, 0.15, 0.2]}
            tick={{ fill: "#ffffff", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1b2a52",
              border: "none",
              color: "#fff",
            }}
          />
          <CartesianGrid
            stroke="#ffffff20"
            strokeDasharray="0"
            vertical={false}
            horizontal={true}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
