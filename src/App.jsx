import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import "./index.css";

function App() {
  return (
    <div className="align-items">
      <h1 > Countries Statistics</h1>
      <PieChart />
      <BarChart />
    </div>
  );
}

export default App;
