import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import * as ReactBootstrap from 'react-bootstrap';

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

function CategoryFilter() {

    const dispatch = useDispatch();
    const history = useHistory();
    const categorySearchResults = useSelector(state => state.categorySearchResults);

    useEffect(() => {
        fetch(SEARCH_URL)
            .then(response => response.json())
            .then(data => dispatch({ type: 'categorySearchResults/added', payload: data }))
            .catch(err => console.log('Error loading results:', err));
    }, []);

    function handleCategoryButtonClick(categoryName) {
        let newCategoryName = categoryName.replaceAll('/', '&');
        history.push(`/cocktail/searchByCategory/${newCategoryName}`);
    }

    return (

        <div>
            <ul className="CocktailSearchResults">
                {

                    Object.entries(categorySearchResults).length > 0
                        ?
                        categorySearchResults.drinks.map((drink, index) => (
                            <li key={drink.strCategory}>
                                <button
                                    className=" btn btn-info mt-3"
                                    onClick={() => handleCategoryButtonClick(drink.strCategory)}
                                >
                                    {drink.strCategory}
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

export default CategoryFilter;