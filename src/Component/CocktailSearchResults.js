import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import * as ReactBootstrap from 'react-bootstrap';

import './CocktailSearchResults.css';

function CocktailSearchResults(props) {

    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const cocktailSearchResults = useSelector(state => state.cocktailSearchResults);

    function handleImgClick(drink, index) {
        dispatch({ type: 'lastVisitedURL/added', payload: window.location.href })
        dispatch({ type: 'slideshowIndex/added', payload: index })
        history.push(`/cocktail/${drink.idDrink}`);
    }

    return (
        <div className="mt-5">
            <ul className="CocktailSearchResults">
                {

                    cocktailSearchResults.drinks
                        ?
                        cocktailSearchResults.drinks.map((drink, index) => (
                            <li key={drink.idDrink} onClick={() => handleImgClick(drink, index)}>
                                <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
                                <p className="mt-2">{drink.strDrink}</p>
                            </li>
                        ))
                        :
                        <ReactBootstrap.Spinner animation="border" variant="success" />
                }
            </ul>
        </div>
    );
}

export default CocktailSearchResults;