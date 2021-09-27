import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import * as ReactBootstrap from 'react-bootstrap';

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';

function AlcoholicFilter() {

    const dispatch = useDispatch();
    const history = useHistory();
    const alcoholicSearchResults = useSelector(state => state.alcoholicSearchResults);

    useEffect(() => {
        fetch(SEARCH_URL)
            .then(response => response.json())
            .then(data => dispatch({ type: 'alcoholicSearchResults/added', payload: data }))
            .catch(err => console.log('Error loading results:', err));
    }, []);

    function handleAlcoholicButtonClick( alcoholic ) {
        history.push(`/cocktail/searchByAlcoholic/${alcoholic}`);
    }

    return (

        <div>
            <ul className="CocktailSearchResults">
                {

                    Object.entries(alcoholicSearchResults).length > 0
                        ?
                        alcoholicSearchResults.drinks.map((drink, index) => (
                            <li key={drink.strAlcoholic}>
                                <button
                                    className=" btn btn-info mt-3"
                                    onClick={ () => handleAlcoholicButtonClick( drink.strAlcoholic ) }
                                >
                                    {drink.strAlcoholic}
                                </button>
                            </li>
                        ))
                        :
                        <ReactBootstrap.Spinner animation="border" variant="success" />
                }
            </ul>
        </div>

    )
}

export default AlcoholicFilter;