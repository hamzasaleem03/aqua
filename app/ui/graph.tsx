"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  { name: "1", value: 0.01 },
  { name: "2", value: 0.02 },
  { name: "3", value: 0.05 },
  { name: "4", value: 0.1 },
  { name: "5", value: 0.15 },
  { name: "6", value: 0.18 },
  { name: "7", value: 0.2 },
];

export default function Graph({ invested = 8.5 }: { invested?: number }) {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="bg-white/10 rounded-xl backdrop-blur-md p-6 shadow-lg">
      <div className="flex gap-2 items-center mb-4">
        <div className="flex items-center space-x-2 clashmedium py-1 bg-white/5 rounded-xl w-[170px] px-3">
          <input type="checkbox" className="accent-blue-500 rounded-xl" />
          <span className="text-gray-300 text-sm">Market Cap Graph</span>
        </div>
        <button
          onClick={() => setShowTable(!showTable)}
          className="py-1.5 bg-white/5 rounded-xl px-4 text-sm hover:scale-[1.02] transition clashmedium text-gray-300"
        >
          {showTable ? "Show Graph" : "Show Table"}
        </button>
      </div>

      <div className="2xl:h-[40vh] md:h-[60vh] h-64 bg1 py-4 relative overflow-hidden">
        <div className="h-full flex flex-col px-2">
          <AnimatePresence mode="wait">
            {showTable ? (
              <motion.div
                key="table"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 overflow-x-auto bg-white/5 rounded-lg p-4"
              >
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20 text-gray-300">
                      <th className="p-2">Level</th>
                      <th className="p-2">Multiplier</th>
                      <th className="p-2">Value (SOL)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((d, i) => (
                      <tr
                        key={i}
                        className="border-b border-white/10 hover:bg-white/10"
                      >
                        <td className="p-2">{d.name}</td>
                        <td className="p-2">{d.value}</td>
                        <td className="p-2">
                          {(invested * d.value).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            ) : (
              <motion.div
                key="graph"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
