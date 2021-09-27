//import logo from '../logo.svg';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';

import CocktailSearchForm from './CocktailSearchForm';
import CocktailDetails from './CocktailDetails';
import Home from './Home';
import PopularCocktails from './PopularCocktails';
import LatestCocktails from './LatestCocktails';
import CocktailsByName from './CocktailsByName';
import CocktailByFirstLetter from './CocktailByFirstLetter';
import Footer from './Footer';
import SideBarFilter from './SideBarFilter';
import NameFilter from './NameFilter';
import IngridiantFilter from './IngridiantFilter';
import CocktailsByIngridiant from './CocktailsByIngridiant';
import CategoryFilter from './CategoryFilter';
import CocktailsByCategory from './CocktailsByCategory';
import GlassFilter from './GlassFilter';
import CocktailsByGlass from './CocktailsByGlass';
import AlcoholicFilter from './AlcoholicFilter';
import CocktailsAlcoholic from './CocktailsByAlcoholic';

function PageNotFound(props) {
  return (
    <div>
      <strong>Sorry! Page not found</strong>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Row className="justify-content-md-center">
            <h2>Welcome to the Cocktail</h2>
          </Row> */}
        <div className="container bg-dark ml-0 mr-0 px-0">
          <h2>Welcome to the Cocktail</h2>
        </div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container">
            <Button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navMenue"
              aria-controls="navMenue"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navMenue">
              <ul className="navbar-nav text-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cocktail/popular">Popular</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cocktail/latest">Latest</Link>
                </li>
              </ul>
            </div>

            <Route component={CocktailSearchForm} />

          </div>
        </nav>
        <Row className="justify-content-md-center">
          <Col sm={2}>
            <SideBarFilter />
          </Col>
          <Col sm={10}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cocktail/popular" component={PopularCocktails} />
              <Route exact path="/cocktail/latest" component={LatestCocktails} />
              <Route exact path="/cocktail/searchByName/:query" component={CocktailsByName} />
              <Route exact path="/cocktail/searchByIngridiant/:query" component={CocktailsByIngridiant} />
              <Route exact path="/cocktail/searchByCategory/:query" component={CocktailsByCategory} />
              <Route exact path="/cocktail/searchByGlass/:query" component={CocktailsByGlass} />
              <Route exact path="/cocktail/searchByAlcoholic/:query" component={CocktailsAlcoholic} />
              <Route exact path="/cocktail/searchByFirstLetter/:query" component={CocktailByFirstLetter} />
              <Route exact path="/cocktail/:id" component={CocktailDetails} />
              <Route exact path="/cocktail/filter/byName/" component={NameFilter} />
              <Route exact path="/cocktail/filter/byIngridiant/" component={IngridiantFilter} />
              <Route exact path="/cocktail/filter/byCategory/" component={CategoryFilter} />
              <Route exact path="/cocktail/filter/byGlass/" component={GlassFilter} />
              <Route exact path="/cocktail/filter/byAlcoholic/" component={AlcoholicFilter} />
              
              <Route component={PageNotFound} />

            </Switch>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Footer />
        </Row>

      </Router>

    </div>
  );
}

export default App;
