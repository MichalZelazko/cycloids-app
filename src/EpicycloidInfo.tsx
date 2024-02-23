import { MathJax, MathJaxContext } from "better-react-mathjax";

const EpicycloidInfo = () => {
  return (
    <>
      <h2>Epicycloid</h2>
      <p>
        An epicycloid is a plane curve produced by tracing the path of a chosen
        point on the circumference of a circle - called an epicycle - that rolls
        without slipping around a fixed circle. It is a particular kind of
        roulette.
      </p>
      <p>The parametric equations for an epicycloid are:</p>
      <p>
        <MathJaxContext>
          <MathJax>
            {
              "\\(x = (R + r) \\cdot cos(\\theta) - r \\cdot cos((\\frac{R + r}{r}) \\cdot \\theta)\\)"
            }
          </MathJax>
        </MathJaxContext>
      </p>
      <p>
        <MathJaxContext>
          <MathJax>
            {
              "\\(y = (R + r) \\cdot sin(\\theta) - r \\cdot sin((\\frac{R + r}{r}) \\cdot \\theta)\\)"
            }
          </MathJax>
        </MathJaxContext>
      </p>
      <p className="legend">
        Where:
        <ul style={{ listStyleType: "none" }}>
          <li>
            <MathJaxContext>
              <MathJax>{"\\(R\\)"} &nbsp;- radius of the fixed circle</MathJax>
            </MathJaxContext>
          </li>
          <li>
            <MathJaxContext>
              <MathJax>
                {"\\(r\\)"} &nbsp;- radius of the rolling circle
              </MathJax>
            </MathJaxContext>
          </li>
          <li>
            <MathJaxContext>
              <MathJax>{"\\(\\theta\\)"} &nbsp;- angle of rotation</MathJax>
            </MathJaxContext>
          </li>
        </ul>
      </p>
    </>
  );
};

export default EpicycloidInfo;
