import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

interface Point {
  x: number;
  y: number;
}

interface ICycloidProps {
  R: number; // Radius of the fixed circle
  r: number; // Radius of the rolling circle
  numPoints: number; // Number of points to generate
  active: string;
}

const CycloidGraph = ({ R, r, numPoints, active }: ICycloidProps) => {
  function generateCycloidPoints(params: ICycloidProps): Point[] {
    const { R, r, numPoints } = params;
    const points: Point[] = [];

    if (active === "epicycloid") {
      for (let i = 0; i < numPoints; i++) {
        const theta = (i / numPoints) * 10 * Math.PI;
        const x =
          (R + r) * Math.cos(theta) - r * Math.cos(((R + r) / r) * theta);
        const y =
          (R + r) * Math.sin(theta) - r * Math.sin(((R + r) / r) * theta);
        points.push({ x, y });
      }
    } else {
      for (let i = 0; i < numPoints; i++) {
        const theta = (i / numPoints) * 10 * Math.PI;
        const x =
          (R - r) * Math.cos(theta) + r * Math.cos(((R - r) / r) * theta);
        const y =
          (R - r) * Math.sin(theta) - r * Math.sin(((R - r) / r) * theta);
        points.push({ x, y });
      }
    }

    return points;
  }

  const points = generateCycloidPoints({ R, r, numPoints, active });

  ChartJS.register();

  return (
    <Chart
      style={{ padding: " 0 30px", maxWidth: "100%" }}
      type="scatter"
      data={{
        labels: points.map((p) => p.x),
        datasets: [
          {
            data: points.map((p) => p.y),
            fill: false,
            backgroundColor: "#0025fa",
            borderColor: "#0025fa ",
            borderWidth: 1,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        showLine: true,
        scales: {
          x: {
            type: "linear",
            position: "center",
            min: -2 * (R + r),
            max: 2 * (R + r),
            grid: {
              lineWidth: (context) => {
                if (context.tick.value === 0) {
                  return 5;
                }
                return 1;
              },
            },
          },
          y: {
            type: "linear",
            position: "center",
            min: -2 * (R + r),
            max: 2 * (R + r),
            grid: {
              lineWidth: (context) => {
                if (context.tick.value === 0) {
                  return 5;
                }
                return 1;
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        elements: {
          line: {
            tension: 0.1,
          },
        },
      }}
    />
  );
};

export default CycloidGraph;
