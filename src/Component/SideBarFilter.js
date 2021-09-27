import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { DropdownButton, Dropdown } from "react-bootstrap";

function SideBarFilter() {

    const history = useHistory();
    const dispatch = useDispatch();

    function handleChange(event) {
        switch (event) {
            case 'byName': {
                dispatch({ type: 'cocktailSearchResults/added', payload: '' });
                return history.push('/cocktail/filter/byName/');
            }
            case 'byIngridiant':
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
        <div>
            <DropdownButton
                id="dropdown-button-drop-end"
                variant="secondary"
                title="Filter By"
                onSelect={handleChange}
            >
                <Dropdown.Item eventKey="byName">Filter By Name</Dropdown.Item>
                <Dropdown.Item eventKey="byIngridiant">Filter By Ingridiant</Dropdown.Item>
                <Dropdown.Item eventKey="byCategory">Filter By Category</Dropdown.Item>
                <Dropdown.Item eventKey="byGlass">Filter By Glass</Dropdown.Item>
                <Dropdown.Item eventKey="byAlcoholic">Filter By Alcoholic</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default SideBarFilter;