import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
//import { Navbar, Container, Row, Col, Button, NavDropdown } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

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
import CocktailNavbar from './CocktailNavbar';

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
        <CocktailNavbar />
        <Row className="justify-content-md-center">
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
        </Row>
        <Row className="justify-content-md-center">
          <Footer />
        </Row>

      </Router>

    </div>
  );
}

export default App;