import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NoMatch404 from "./components/pages/NoMatch404";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import '@popperjs/core'
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container-lg">
            <Navbar/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/About"><About/></Route>
                    <Route path="*"><NoMatch404/></Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;