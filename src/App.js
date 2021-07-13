import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyFooter from "./components/MyFooter/MyFooter.jsx";
import MyProjects from "./components/MyProjects/MyProjects.jsx";
import MyHeader from "./components/MyHeader/MyHeader";
import MyHome from "./components/MyHome/MyHome";
import MyContactMe from "./components/MyContactMe/MyContactMe";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyHeader />

      <Route path="/projects" render={MyProjects} />
      <Route path="/home" render={MyHome} />
      {/* <Route path="/aboutMe" render={MyAboutMe} /> */}
      <Route path="/contactMe" render={MyContactMe} />

      <MyFooter />
    </div>
  );
}

export default App;
