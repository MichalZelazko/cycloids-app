import { ChangeEvent, MouseEvent, useState } from "react";
import "./App.min.scss";
import EpicycloidInfo from "./EpicycloidInfo";
import CycloidGraph from "./CycloidGraph";
import HypocycloidInfo from "./HypocycloidInfo";

function App() {
  const [fixedRadius, setFixedRadius] = useState<number>(1);
  const [movingRadius, setMovingRadius] = useState<number>(5);
  const [active, setActive] = useState<string>("epicycloid");

  const updateStaticRadius = (event: ChangeEvent<HTMLInputElement>) => {
    setFixedRadius(parseFloat(event.target.value));
    if (active === "hypocycloid" && movingRadius >= fixedRadius) {
      setMovingRadius(fixedRadius - 1);
    }
  };

  const updateMovingRadius = (event: ChangeEvent<HTMLInputElement>) => {
    setMovingRadius(parseFloat(event.target.value));
  };

  const toggleActive = (event: MouseEvent<HTMLButtonElement>) => {
    setActive(event.currentTarget.textContent?.toLowerCase() || "epicycloid");
  };

  return (
    <>
      <nav className="navbar">
        <h1>Cycloids App</h1>
      </nav>
      <main className="content-wrapper">
        <div className="info-wrapper">
          <div className="choice">
            <button
              className={active === "epicycloid" ? "active" : ""}
              onClick={toggleActive}
            >
              Epicycloid
            </button>
            <button
              className={active === "hypocycloid" ? "active" : ""}
              onClick={toggleActive}
            >
              Hypocycloid
            </button>
          </div>
          <div className="info">
            {active === "epicycloid" ? <EpicycloidInfo /> : <HypocycloidInfo />}
          </div>
        </div>
        <div className="graph-wrapper">
          <div className="parameters-wrapper">
            <div className="parameter">
              <label htmlFor="fixed-radius">Fixed Circle Radius</label>
              <div className="slider">
                <span>{active === "hypocycloid" ? 3 : 1}</span>
                <input
                  type="range"
                  id="fixed-radius"
                  defaultValue={1}
                  min={active === "hypocycloid" ? 3 : 1}
                  max={10}
                  onChange={updateStaticRadius}
                />
                <span>10</span>
              </div>
              <p className="current-value">{fixedRadius.toPrecision(3)}</p>
            </div>
            <div className="parameter">
              <label htmlFor="moving-radius">Rolling cycle radius</label>
              <div className="slider">
                <span>1</span>
                <input
                  type="range"
                  id="moving-radius"
                  defaultValue={5}
                  min={1}
                  max={active === "hypocycloid" ? fixedRadius - 1 : 10}
                  onChange={updateMovingRadius}
                />
                <span>{active === "hypocycloid" ? fixedRadius - 1 : 10}</span>
              </div>
              <p className="current-value">{movingRadius.toPrecision(3)}</p>
            </div>
          </div>
          <CycloidGraph
            r={movingRadius}
            R={fixedRadius}
            numPoints={200}
            active={active}
          />
        </div>
      </main>
      <footer className="footer">
        <p>
          Created by{" "}
          <a href="https://github.com/MichalZelazko" target="_blank">
            Michał Żelazko
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
