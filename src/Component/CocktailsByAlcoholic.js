import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import AlcoholicFilter from "./AlcoholicFilter";
import CategoryFilter from "./CategoryFilter";
import CocktailSearchResults from "./CocktailSearchResults";

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=';

function CocktailsAlcoholic() {

    const params = useParams();
    const dispatch = useDispatch();
    const cocktailSearchResults = useSelector(state => state.cocktailSearchResults);

    useEffect(() => {
        fetch( SEARCH_URL + params.query )
            .then( response => response.json() )
            .then( data => dispatch( { type: 'cocktailSearchResults/added', payload: data } ) )
            .catch( err => console.log( 'Error loading results:', err ) );
    }, [ params.query ] );

    return (
        <div>
            <div>
                <AlcoholicFilter />
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

export default CocktailsAlcoholic;