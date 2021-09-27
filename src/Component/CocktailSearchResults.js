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
        <div>
            <ul className="CocktailSearchResults">
                {

                    Object.entries(cocktailSearchResults).length > 0
                        ?
                        cocktailSearchResults.drinks.map((drink, index) => (
                            <li key={drink.idDrink}>
                                <img
                                    src={drink.strDrinkThumb}
                                    alt={drink.strDrink}
                                    onClick={() => handleImgClick( drink, index )}
                                />
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