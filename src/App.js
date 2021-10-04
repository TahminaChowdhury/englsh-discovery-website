
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import NotFound from './components/NotFound/NotFound'
import { Container } from 'react-bootstrap';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Services></Services>
          </Route>
          <Route path="/Blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/">
            <Container></Container>
          </Route>
          <Route exact path ="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
