import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

import CocktailSearchForm from "./CocktailSearchForm";

function CocktailNavbar() {

    const history = useHistory();
    const dispatch = useDispatch();

    function handleFilterSelect(event) {
        switch (event) {
            case 'byName': {
                dispatch({ type: 'cocktailSearchResults/added', payload: '' });
                return history.push('/cocktail/filter/byName/');
            }
            case 'byIngridient':
                return history.push('/cocktail/filter/byIngridiant/');
            case 'byCategory':
                return history.push('/cocktail/filter/byCategory/');
            case 'byGlass':
                return history.push('/cocktail/filter/byGlass/');
            case 'byAlcoholic':
                return history.push('/cocktail/filter/byAlcoholic/');
            default:
                return history.push('/')
        }
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/cocktail/popular">Popular</Link>
                        <Link className="nav-link" to="/cocktail/latest">Latest</Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" onSelect={handleFilterSelect}>
                            <NavDropdown.Item eventKey="byName">Filter By Name</NavDropdown.Item>
                            <NavDropdown.Item eventKey="byIngridient">Filter By Ingridient</NavDropdown.Item>
                            <NavDropdown.Item eventKey="byCategory">Filter By Category</NavDropdown.Item>
                            <NavDropdown.Item eventKey="byGlass">Filter By Glass</NavDropdown.Item>
                            <NavDropdown.Item eventKey="byAlcoholic">Filter By Alcoholic</NavDropdown.Item>
                        </NavDropdown>
                        <Link className="nav-link" to="/cocktail/favourite">Favourites</Link>
                    </Nav>
                    <CocktailSearchForm />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default CocktailNavbar;

