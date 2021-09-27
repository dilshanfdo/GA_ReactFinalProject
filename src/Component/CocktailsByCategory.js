import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CategoryFilter from "./CategoryFilter";
import CocktailSearchResults from "./CocktailSearchResults";

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

function CocktailsByCategory() {

    const params = useParams();
    const dispatch = useDispatch();
    const cocktailSearchResults = useSelector(state => state.cocktailSearchResults);
    let cocktailList = [];

    useEffect(() => {
        const newQuery = params.query.replaceAll('&', '/');
        fetch(SEARCH_URL + newQuery)
            .then(response => response.json())
            .then(data => dispatch({ type: 'cocktailSearchResults/added', payload: data }))
            .catch(err => console.log('Error loading results:', err));
    }, [params.query]);

    return (
        <div>
            <div>
                <CategoryFilter />
            </div>
            <div>
                {
                    cocktailSearchResults.drinks !== null
                        ?
                        <CocktailSearchResults />
                        :
                        <p>Cocktail not found !</p>
                }
            </div>

        </div>
    )
}

export default CocktailsByCategory;