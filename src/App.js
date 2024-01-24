import "./App.css";
import Homepage from "./components/homepage/Homepage";

function App() {
  const quesAnsList = [];
  return (
    <div className="App">
      <Homepage quesAnsList={quesAnsList} />
    </div>
  );
}

export default App;
