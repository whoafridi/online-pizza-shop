import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/admin" component={AdminScreen} />
        <Route path="/orders" component={OrderScreen} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/about" component={About} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/" component={HomeScreen} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
