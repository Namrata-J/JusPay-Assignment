interface ProjectionData {
  name: string;
  projection: number;
  actual: number;
}

export interface ProjectionsChartProps {
  data: ProjectionData[];
}

interface RevenueData {
  name: string;
  currentWeek: number;
  previousWeek: number;
}

interface Legend {
  color: string;
  text: string;
  amount: string;
}

export interface RevenueChartProps {
  data: RevenueData[];
  legends: Legend[];
}

interface SalesData {
  name: string;
  value: number;
  [key: string]: any;
}

export interface SalesPieChartProps {
  data: SalesData[];
  colors: string[];
}
