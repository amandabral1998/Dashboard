import { useCallback, useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import ChartsContainer from "./Components/Charts/ChartsContainer";
import CustomizedSwitches from "./Components/ToggleSwitch/AnalyticsSwitch";
import ThemeToggle from "./Components/ToggleSwitch/ThemeToggle";

function App() {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("Light");
  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const handleThemeToggle = useCallback(() => {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <CustomizedSwitches toggle={toggle} handleToggle={handleToggle} />{" "}
        <ThemeToggle theme={theme} handleThemeToggle={handleThemeToggle} />
      </header>
      <main>
        {toggle ? (
          <ChartsContainer theme={theme} />
        ) : (
          <Dashboard theme={theme} />
        )}
      </main>
    </div>
  );
}

export default App;
