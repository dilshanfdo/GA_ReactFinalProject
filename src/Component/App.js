import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
//import { Navbar, Container, Row, Col, Button, NavDropdown } from 'react-bootstrap';
import { Row, Image } from 'react-bootstrap';
import logo from '../Images/logo.png';
import { RiErrorWarningFill } from 'react-icons/ri';

import CocktailDetails from './CocktailDetails';
import Home from './Home';
import PopularCocktails from './PopularCocktails';
import LatestCocktails from './LatestCocktails';
import CocktailsByName from './CocktailsByName';
import CocktailByFirstLetter from './CocktailByFirstLetter';
import Footer from './Footer';
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
import FavouriteCocktails from "./FavouriteCocktails";
import CocktailSearchForm from './CocktailSearchForm';

function PageNotFound(props) {
  return (
    <div className="mt-5">
      <span><RiErrorWarningFill /></span>
      <p>Sorry! Page not found</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>

        <div className="container-fluid bg-dark mx-0 my-0">
          <div className="d-inline-block w-25 align-bottom pb-3">
            <CocktailNavbar />
          </div>
          <div className="d-inline-block w-50 pb-2">
            <Image className="cocktailLogo d-inline-block mt-3" src={logo} alt="logo" />
            <h2 className="mb-0 navHeading d-inline-block">Enjoy Your Cocktail Today</h2>
          </div>
          <div className="d-inline-block w-25 align-bottom pb-3">
            <CocktailSearchForm ></CocktailSearchForm>
          </div>
        </div>

        <Row className="justify-content-md-center">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cocktail/popular" component={PopularCocktails} />
            <Route exact path="/cocktail/latest" component={LatestCocktails} />
            <Route exact path="/cocktail/favourite" component={FavouriteCocktails} />
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
