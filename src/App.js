import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { store } from "./Store";
import Review from "./Pages/Review";
import News from "./Pages/News";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/review" exact component={Review} />
          <Route path="/news" exact component={News} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
