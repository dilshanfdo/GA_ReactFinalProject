import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import * as ReactBootstrap from 'react-bootstrap';

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

function IngridiantFilter() {

    const dispatch = useDispatch();
    const history = useHistory();
    const ingridiantSearchResults = useSelector(state => state.ingridiantSearchResults);

    useEffect(() => {
        fetch(SEARCH_URL)
            .then(response => response.json())
            .then(data => dispatch({ type: 'ingridiantSearchResults/added', payload: data }))
            .catch(err => console.log('Error loading results:', err));
    }, []);

    function getImageUrl (  ingridiantName ){
        return `https://www.thecocktaildb.com/images/ingredients/${ ingridiantName }-Medium.png`
    }

    function handleImgClick( ingridiantName ) {
        history.push ( `/cocktail/searchByIngridiant/${ ingridiantName }` );
    }

    return (

        <div>
            <ul className="CocktailSearchResults">
                {

                    Object.entries(ingridiantSearchResults).length > 0
                        ?
                        ingridiantSearchResults.drinks.map( ( drink, index ) => (
                            <li key={drink.strIngredient1}>
                                <img
                                    src={ getImageUrl(drink.strIngredient1)}
                                    alt={drink.strIngredient1}
                                    onClick={() => handleImgClick(drink.strIngredient1)}
                                />
                                <p>{drink.strIngredient1}</p>
                            </li>
                        ))
                        :
                        <ReactBootstrap.Spinner animation="border" variant="success" />
                }
            </ul>
        </div>

    )
}

export default IngridiantFilter;