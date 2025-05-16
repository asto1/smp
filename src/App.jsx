import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/admission" component={Admission} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;