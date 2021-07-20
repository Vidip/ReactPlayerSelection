import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImageSelectionWidget from "./components/ImageSelectionWidget";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ImageSelectionWidget} />
      </Switch>
    </Router>
  );
}

export default App;
