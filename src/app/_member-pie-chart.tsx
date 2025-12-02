"use client";

import { Cell, Label, LabelList, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
} from "~/components/ui/chart";

const BASE_CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];


// 学年
type GradeDatum = {
  grade: string
  count: number
  strokeColor: string
}

type MajorDatum = {
  major: string
  count: number
  strokeColor: string
}

const GRADE_DATA: GradeDatum[] = [
  { grade: "1年生", count: 20 },
  { grade: "2年生", count: 11 },
  { grade: "3年生", count: 8 },
  { grade: "4年生", count: 10 },
  { grade: "その他", count: 3 },
].map((item, index) => ({
  ...item,
  strokeColor: BASE_CHART_COLORS[index % BASE_CHART_COLORS.length],
}));

// 専攻
const MAJOR_DATA: MajorDatum[] = [
  { major: "IT・AI", count: 25 },
  { major: "CG・映像", count: 13 },
  { major: "イラスト・\nアニメ", count: 8 },
  { major: "ゲーム", count: 3 },
  { major: "その他", count: 3 },
].map((item, index) => ({
  ...item,
  strokeColor: BASE_CHART_COLORS[index % BASE_CHART_COLORS.length],
}));

const chartConfig = {
  count: {
    label: "人数",
  },
} satisfies ChartConfig;

const TOTAL_MEMBERS = GRADE_DATA.reduce((total, item) => total + item.count, 0);

const PIE_CHARTS: Array<
  | { title: string; data: GradeDatum[]; labelKey: "grade" }
  | { title: string; data: MajorDatum[]; labelKey: "major" }
> = [
  {
    title: "学年構成",
    data: GRADE_DATA,
    labelKey: "grade",
  },
  {
    title: "分野構成",
    data: MAJOR_DATA,
    labelKey: "major",
  },
];

export function RoundedPieChart() {
  return (
    <div className="flex flex-wrap gap-6">
      {PIE_CHARTS.map((chart, chartIndex) => {
        const patternPrefix = `pie-pattern-${chartIndex}`
        return (
        <div
          key={chart.title}
          className="flex flex-1 min-w-[260px] max-w-md flex-col items-center"
        >
          <ChartContainer
            config={chartConfig}
            className="relative aspect-square w-full max-h-[360px] overflow-hidden"
          >
            <PieChart>
              <defs>
                {chart.data.map((entry, sliceIndex) => (
                  <pattern
                    key={`${patternPrefix}-${sliceIndex}`}
                    id={`${patternPrefix}-${sliceIndex}`}
                    width={12}
                    height={12}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      width="12"
                      height="12"
                      fill={`color-mix(in srgb, ${entry.strokeColor} 15%, transparent)`}
                    />
                    <line
                      x1="0"
                      y1="12"
                      x2="12"
                      y2="0"
                      stroke={entry.strokeColor}
                      strokeWidth={1}
                    />
                    <line
                      x1="-12"
                      y1="12"
                      x2="0"
                      y2="0"
                      stroke={entry.strokeColor}
                      strokeWidth={1}
                    />
                    <line
                      x1="12"
                      y1="12"
                      x2="24"
                      y2="0"
                      stroke={entry.strokeColor}
                      strokeWidth={1}
                    />
                  </pattern>
                ))}
              </defs>
              <Pie
                data={chart.data}
                innerRadius={50}
                dataKey="count"
                nameKey={chart.labelKey}
                cornerRadius={10}
                paddingAngle={5}
                isAnimationActive={false}
              >
                <Label
                  value={`${TOTAL_MEMBERS}人`}
                  position="center"
                  fill="hsl(var(--foreground))"
                  style={{ fontSize: "0.875rem", fontWeight: 600 }}
                />
                <LabelList
                  dataKey={chart.labelKey}
                  stroke="none"
                  fontSize={13}
                  fontWeight={500}
                  fill="hsl(var(--foreground))"
                />
                {chart.data.map((entry, sliceIndex) => (
                  <Cell
                    key={`${chart.title}-slice-${sliceIndex}`}
                    fill={`url(#${patternPrefix}-${sliceIndex})`}
                    stroke={entry.strokeColor}
                    strokeWidth={2}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          <p className="text-center text-sm font-medium text-muted-foreground">
            {chart.title}
          </p>
        </div>
      )})}
    </div>
  );
}
