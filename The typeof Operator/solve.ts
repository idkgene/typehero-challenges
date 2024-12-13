type Width = typeof width;

type Margin = typeof margin;

type Data = {
  category: string;
  value: number;
}[];

type YScale = typeof d3ChartConfig.yScale;

type D3ChartConfig = {
  width: number;
  height: number;
  margin: Margin;
  data: Data;
  xScale: {
    type: string;
    domain: number[];
    range: number[];
  };
  yScale: YScale;
  xAxis: {
    label: string;
    tickSize: number;
  };
  yAxis: {
    label: string;
    tickSize: number;
  };
  bar: {
    fill: string;
  };
};
