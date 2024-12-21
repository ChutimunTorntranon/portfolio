import "./App.css";
import About from "./component/About";
import Experience from "./component/Experience";
import Profile from "./component/Profile";
import dataExp from "../src/data/data.js";
function App() {
  const dataEx = dataExp.map((item, index) => {
    return <Experience key={index} profile={item} />;
  });

  return (
    <div className="grid grid-cols-2">
      <div>
        <Profile />
      </div>
      <div>
        <About />
        {dataEx}
      </div>
    </div>
  );
}

export default App;
