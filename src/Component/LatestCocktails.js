import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import latestDrinks from "../Data/LatestCocktailDetails";
import CocktailSearchResults from "./CocktailSearchResults";

function LatestCocktails (){

    const cocktailSearchResults = useSelector(state => state.cocktailSearchResults);
    const dispatch = useDispatch();
    
    // I use fake data for this and no longer need to use the API fetch
    // useEffect(() => {
    //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/latest.php`)
    //         .then(response => response.json())
    //         .then(data => dispatch({ type: 'searchResults/added', payload: data }))
    //         .catch(err => console.log('Error loading results:', err));
    // }, [params.query]);

    useEffect( () => {
        dispatch ( { type: 'cocktailSearchResults/added', payload: latestDrinks } ) 
    }, [] );

    return (
        <div>
            <h4>Latest Cocktails</h4>
            <CocktailSearchResults />
        </div>
    )
}

export default LatestCocktails;