import "./App.css";
import Metrics from "./components/Metrics";
import Time from "./components/Time";

function App() {
  return (
    <div className="main-wrapper">
      <Time />
      <Metrics />
    </div>
  );
}

export default App;
