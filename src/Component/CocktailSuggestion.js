import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import * as ReactBootstrap from 'react-bootstrap';

import CocktailSearchResults from "./CocktailSearchResults";

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

function CocktailSuggestion() {

    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const cocktailSuggestions = useSelector(state => state.cocktailSuggestions);
    const cocktailInfo = useSelector(state => state.cocktailInfo);

    const ingridiant = cocktailInfo.drinks[0].strIngredient1;

    useEffect(() => {
        fetch(SEARCH_URL + ingridiant)
            .then(response => response.json())
            .then(data => dispatch({ type: 'cocktailSuggestions/added', payload: data }))
            .catch(err => console.log('Error loading results:', err));
    }, [params.query]);

    function handleImgClick(drink, index) {
        dispatch({ type: 'lastVisitedURL/added', payload: window.location.href })
        dispatch({ type: 'slideshowIndex/added', payload: index })
        history.push(`/cocktail/${drink.idDrink}`);
    }

    return (
        <div className="mb-5 pb-5">
            <hr />
            <h3 className="mb-5">You may like these too...!</h3>
            <ul className="CocktailSearchResults">
            {
                //console.log(cocktailSuggestions)
                cocktailSuggestions.length > 0
                    ?
                    cocktailSuggestions.map((drink, index) => (
                        <li key={drink.idDrink} onClick={() => handleImgClick(drink, index)}>
                            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                            <p className="mt-2">{drink.strDrink}</p>
                        </li>
                    ))
                    :
                    <ReactBootstrap.Spinner animation="border" variant="success" />
            }
            </ul>
        </div>
    )
}

export default CocktailSuggestion;