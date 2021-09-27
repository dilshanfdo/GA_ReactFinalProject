import { useSelector, useDispatch } from "react-redux";

import { Form } from "react-bootstrap";

import CocktailSearchResults from "./CocktailSearchResults";

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function NameFilter() {

    const dispatch = useDispatch();
    const cocktailSearchResults = useSelector(state => state.cocktailSearchResults);

    function handleChange(event) {
        if (event.target.value === '') {
            dispatch({ type: 'cocktailSearchResults/added', payload: '' })
        } else {
            fetch(SEARCH_URL + event.target.value)
                .then(response => response.json())
                .then(data => dispatch({ type: 'cocktailSearchResults/added', payload: data }))
                .catch(err => console.log('Error loading results:', err));
        }
    }

    return (
        <div>
            <div className="container m-5 w-25">
                <Form>
                    <input
                        className="form-control"
                        type="text"
                        onChange={handleChange}
                    />
                </Form>
            </div>

            {

                cocktailSearchResults.drinks !== null
                    ?
                    Object.entries(cocktailSearchResults).length > 0
                        ?
                        < CocktailSearchResults />
                        :
                        <div></div>
                    :
                    <p>Cocktail not found !</p>
            }
        </div>
    )
}

export default NameFilter;