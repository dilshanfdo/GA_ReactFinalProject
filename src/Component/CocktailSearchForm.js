import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form } from "react-bootstrap";

function CocktailSearchForm(props) {

    const history = useHistory();
    const dispatch = useDispatch();
    const searchText = useSelector(state => state.searchText);

    function handleSearchText(ev) {
        dispatch({ type: 'searchText/changed', payload: ev.target.value })
        //history.push('/cocktail/searchByName/' + ev.target.value);
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        if (searchText !== '') {
            history.push(`/cocktail/searchByName/${searchText}`);
            dispatch({ type: 'searchText/changed', payload: '' })
        }

    }

    return (
        <div className="d-none d-lg-block">
            <Form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control"
                    type="text"
                    value={searchText}
                    onChange={handleSearchText}
                />
                <button className="btn btn-primary">Search</button>
            </Form>
        </div>
    );
}

export default CocktailSearchForm;