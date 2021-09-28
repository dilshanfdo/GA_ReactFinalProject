import { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import * as ReactBootstrap from 'react-bootstrap';
import { FaArrowCircleLeft, FaArrowCircleRight, FaLeaf } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { BiDownload } from 'react-icons/bi';

import Ingridiants from './Ingridiants';

const SEARCH_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function CocktailDetails() {

    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const cocktailInfo = useSelector(state => state.cocktailInfo);
    const slideshowIndex = useSelector(state => state.slideshowIndex);
    const cocktailSearchResults = useSelector(state => state.cocktailSearchResults);
    const lastVisitedURL = useSelector(state => state.lastVisitedURL);
    const favouritCocktails = useSelector(state => state.favouritCocktails);

    // let cocktail;
    // if( cocktailSearchResults.drinks.indexOf( params.id ) ){
    //     cocktail = cocktailSearchResults.drinks.filter(item => item.idDrink === params.id)
    // } else {
    //     fetch( SEARCH_URL + params.id )
    //         .then( response => response.json() )
    //         .then( data => cocktail = data )
    //         .catch( err => console.log( 'Error loading results:', err ) );
    // }

    useEffect(() => {
        fetch(SEARCH_URL + params.id)
            .then(response => response.json())
            .then(data => dispatch({ type: 'cocktailInfo/added', payload: data }))
            .catch(err => console.log('Error loading results:', err));

        //test();
    }, [params.id]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeypress);
        return () => window.removeEventListener('keydown', handleKeypress);
    }, [slideshowIndex]);

    function goNext() {
        dispatch({ type: 'cocktailInfo/added', payload: '' })
        const newIndex = (slideshowIndex + 1) % cocktailSearchResults.drinks.length;
        dispatch({ type: 'slideshowIndex/added', payload: newIndex });
        history.push(`/cocktail/${cocktailSearchResults.drinks[newIndex].idDrink}`);
    }

    function goPrev() {
        dispatch({ type: 'cocktailInfo/added', payload: '' })
        const newIndex = (slideshowIndex - 1) < 0 ? cocktailSearchResults.drinks.length - 1 : slideshowIndex - 1;
        dispatch({ type: 'slideshowIndex/added', payload: newIndex });
        history.push(`/cocktail/${cocktailSearchResults.drinks[newIndex].idDrink}`);
    }

    function handleKeypress(ev) {

        if (!cocktailSearchResults.drinks) {
            return;
        }

        switch (ev.code) {
            case 'ArrowLeft':
                ev.preventDefault();
                return goPrev();
            case 'ArrowRight':
                ev.preventDefault();
                return goNext();
            case 'Escape':
                ev.preventDefault();
                return goSearchResults();
        }
    }

    function goSearchResults() {
        history.push(lastVisitedURL !== '' ? lastVisitedURL : '/');
    }
    
    // function test() {
    //     for (let i = 0; i < 2; i++) {
    //         let ingridiant = 'strIngredient' + i;
    //         if (cocktailInfo.drinks[0].ingridiant === null) {
    //             break;
    //         };
    //         setIngridiantList([...ingridiantList, cocktailInfo.drinks[0].ingridiant])
    //     }
    // }

    return (

        < div className="m-2" >
            {
                cocktailInfo.drinks
                    ?
                    <div>
                        <div className="col-4 d-inline m-2">
                            <img className="" src={cocktailInfo.drinks[0].strDrinkThumb} />
                            {
                                cocktailSearchResults.drinks
                                &&
                                <div>
                                    <button className="btn" onClick={goPrev}><FaArrowCircleLeft /></button>
                                    <button className="btn" onClick={goNext}><FaArrowCircleRight /></button>
                                    <button
                                        className={`btn ${cocktailInfo.drinks[0].idDrink in favouritCocktails ? "btn-success" : ""}`}
                                        onClick={ () => dispatch( { type: 'favouritCocktails/added', payload: cocktailInfo.drinks[0].idDrink } ) }
                                        
                                    ><MdFavorite />
                                    </button>
                                    <button className="btn" ><BiDownload /></button>
                                </div>
                            }

                        </div>

                        <div className="col-6 d-inline-block m-2">
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td >{cocktailInfo.drinks[0].strDrink}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Category</th>
                                        <td>{cocktailInfo.drinks[0].strCategory}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Glass</th>
                                        <td>{cocktailInfo.drinks[0].strGlass}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ingridiants</th>
                                        <td>
                                            <Ingridiants />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Instruction</th>
                                        <td>{cocktailInfo.drinks[0].strInstructions}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <ReactBootstrap.Spinner animation="border" variant="success" />
            }

        </div>
    )
}

export default CocktailDetails;