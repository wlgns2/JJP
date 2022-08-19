import "./App.css";
import Login from "./component/login";
import Rid from "./component/rid";
import Rpass from "./component/rpass";
import MamBer from "./component/mamber";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <div className="Main">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/Rid">
          <Rid />
        </Route>
        <Route path="/Rapss">
          <Rpass />
        </Route>
        <Route path="/MamBer">
          <MamBer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
