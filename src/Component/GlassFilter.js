import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import * as ReactBootstrap from 'react-bootstrap';

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';

function GlassFilter() {

    const dispatch = useDispatch();
    const history = useHistory();
    const glassSearchResults = useSelector(state => state.glassSearchResults);

    useEffect(() => {
        fetch(SEARCH_URL)
            .then(response => response.json())
            .then(data => dispatch({ type: 'glassSearchResults/added', payload: data }))
            .catch(err => console.log('Error loading results:', err));
    }, []);

    function handleGlassButtonClick( glass ) {
        console.log('handleGlassButtonClick', glass)
        let newGlass = glass.replaceAll('/', '&');
        history.push(`/cocktail/searchByGlass/${newGlass}`);
    }

    return (

        <div className="d-flex justify-content-start">
            <ul className="list-group d-inlin-block">
                {

                    Object.entries(glassSearchResults).length > 0
                        ?
                        glassSearchResults.drinks.map((glass) => (
                            <li
                                className="list-group-item list-group-item-action"
                                key={glass.strGlass}
                                onClick={ () => handleGlassButtonClick( glass.strGlass ) }
                            >
                                {glass.strGlass}
                            </li>
                        ))
                        :
                        <ReactBootstrap.Spinner animation="border" variant="success" />
                }
            </ul>
        </div>

    )
}

export default GlassFilter;