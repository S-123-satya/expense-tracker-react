import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div>
      {props.dataPoints.map((dataPoint) => {
        <Chart
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
