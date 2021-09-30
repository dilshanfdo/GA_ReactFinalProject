import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function FavouriteCocktails() {

    const dispatch = useDispatch();
    const history = useHistory();
    const favouritCocktails = useSelector(state => state.favouritCocktails);

    const data = { ...favouritCocktails }
    let favourites = []

    for (const [id, drink] of Object.entries(data)) {
        favourites.push(drink)

    }

    function handleImgClick(drink, index) {
        dispatch({ type: 'lastVisitedURL/added', payload: window.location.href })
        dispatch({ type: 'slideshowIndex/added', payload: index })
        history.push(`/cocktail/${drink.idDrink}`);
    }

    return (
        <div className="mt-3">
            <h4 className="mb-5">My Favourite Cocktails</h4>
            <ul className="CocktailSearchResults">
                {

                    favourites.length > 0
                        ?
                        favourites.map((drink, index) => (
                            <li key={drink.idDrink}>
                                <div onClick={() => handleImgClick(drink, index)}>
                                    <img
                                        src={drink.strDrinkThumb}
                                        alt={drink.strDrink}
                                    />
                                    <p className="mt-2">{drink.strDrink}</p>
                                </div>
                            </li>
                        ))
                        :
                        <p>No Favorite Cocktails To Display</p>
                }
            </ul>
        </div>
    )
}

export default FavouriteCocktails;