import { useEffect } from "react";
import { useDispatch } from "react-redux";

import popularDrinks from "../Data/PopularCocktailDetails";
import CocktailSearchResults from "./CocktailSearchResults";

function PopularCocktails (){

    const dispatch = useDispatch();
    
    // I use fake data for this and no longer need to use the API fetch
    // useEffect(() => {
    //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/popular.php`)
    //         .then(response => response.json())
    //         .then(data => dispatch({ type: 'searchResults/added', payload: data }))
    //         .catch(err => console.log('Error loading results:', err));
    // }, [params.query]);

    useEffect( () => {
        dispatch ( { type: 'cocktailSearchResults/added', payload: popularDrinks } ) 
    }, [] );

    return (
        <div className="mt-3">
            <h4>Popular Cocktails</h4>
            <CocktailSearchResults />
        </div>
    )
}

export default PopularCocktails;