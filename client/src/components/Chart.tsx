import { User } from "../types/props";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { getRandomColor } from "../utils/helpers/getRandomColor";

const Chart = ({ user }: { user: User }) => {
  const chartData =
    user?.portfolios.map((portfolio) => {
      let value = 1;

      if (
        portfolio.platform === "manual" &&
        typeof portfolio.credentials.quantity === "number"
      ) {
        value = portfolio.credentials.quantity;
      } else if (portfolio.platform === "csv") {
        value = 5;
      } else if (portfolio.platform === "api") {
        value = 10;
      }

      return {
        name: portfolio.platform.toUpperCase(),
        value,
        color: getRandomColor(),
      };
    }) || [];

  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
