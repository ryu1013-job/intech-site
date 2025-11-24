"use client";

import type { ComponentProps } from "react";
import { Label, LabelList, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

export const description = "A pie chart with a label list";

const GRADE_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const MAJOR_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

// 学年
const GRADE_DATA = [
  { grade: "1年生", percent: 39.5 },
  { grade: "2年生", percent: 15.8 },
  { grade: "3年生", percent: 13.2 },
  { grade: "4年生", percent: 26.3 },
  { grade: "その他", percent: 5.3 },
].map((item, index) => ({
  ...item,
  fill: GRADE_COLORS[index % GRADE_COLORS.length],
}));

// 専攻
const MAJOR_DATA = [
  { major: "IT系", percent: 39.5 },
  { major: "イラスト系", percent: 19.0 },
  { major: "メディア系", percent: 28.6 },
  { major: "ゲーム系", percent: 9.5 },
  { major: "その他", percent: 3.4 },
].map((item, index) => ({
  ...item,
  fill: MAJOR_COLORS[index % MAJOR_COLORS.length],
}));

const chartConfig = {
  percent: {
    label: "比率",
  },
} satisfies ChartConfig;

type TooltipFormatter = NonNullable<
  ComponentProps<typeof ChartTooltipContent>["formatter"]
>;

const tooltipFormatter: TooltipFormatter = (value, name) => {
  const label = typeof name === "string" ? name : String(name ?? "");
  const rawValue = Array.isArray(value) ? value[0] : value;
  const numericValue =
    typeof rawValue === "number" ? rawValue : Number(rawValue ?? 0);
  return `${label}：${numericValue}%`;
};

const PIE_CHARTS = [
  {
    title: "学年構成",
    data: GRADE_DATA,
    labelKey: "grade" as const,
  },
  {
    title: "専攻構成",
    data: MAJOR_DATA,
    labelKey: "major" as const,
  },
];

export function RoundedPieChart() {
  return (
    <div className="flex flex-wrap gap-6">
      {PIE_CHARTS.map((chart) => (
        <div
          key={chart.title}
          className="flex flex-1 min-w-[220px] max-w-sm flex-col items-center"
        >
          <ChartContainer
            config={chartConfig}
            className="aspect-square w-full max-h-[300px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelKey={chart.labelKey}
                    formatter={tooltipFormatter}
                  />
                }
              />
              <Pie
                data={chart.data}
                innerRadius={40}
                dataKey="percent"
                nameKey={chart.labelKey}
                cornerRadius={8}
                paddingAngle={4}
              >
                <Label
                  value="約50人"
                  position="center"
                  fill="hsl(var(--foreground))"
                  style={{ fontSize: "0.875rem", fontWeight: 600 }}
                />
                <LabelList
                  dataKey={chart.labelKey}
                  stroke="none"
                  fontSize={12}
                  fontWeight={500}
                  fill="#fff"
                />
              </Pie>
            </PieChart>
          </ChartContainer>
          <p className="text-center text-sm font-medium text-muted-foreground">
            {chart.title}
          </p>
        </div>
      ))}
    </div>
  );
}
