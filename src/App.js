import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import LandingPage from "./components/LandingPage.js";
import About from "./components/About/About.js";

import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />

        <LandingPage />
      </Switch>
    </div>
  );
}

export default App;
