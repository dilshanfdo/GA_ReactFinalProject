import { useSelector } from "react-redux";

import * as ReactBootstrap from 'react-bootstrap';
import { useHistory } from "react-router";

function Ingridiants() {

    const history = useHistory();
    const cocktailInfo = useSelector(state => state.cocktailInfo);

    function getIngridiantImgs(ingridiant) {
        if (ingridiant === null || ingridiant === "") {
            return "";
        }
        return `https:www.thecocktaildb.com/images/ingredients/${ingridiant}-Small.png`;
    }

    function handleIngridientClick ( ingridient ){
        history.push ( `/cocktail/searchByIngridiant/${ ingridient }` );
    }

    return (
        <table className="table table-borderless table-sm ingridientTable">
            <tbody className="d-inline-block">
                <tr>
                    <td>
                        <div onClick={ () => handleIngridientClick(cocktailInfo.drinks[0].strIngredient1)}>
                            <img
                                className="m-0"
                                alt={cocktailInfo.drinks[0].strIngredient1}
                                src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient1)}
                            />
                            <p>{cocktailInfo.drinks[0].strIngredient1}</p>
                        </div>
                    </td>

                    <td>
                        <div onClick={ () => handleIngridientClick(cocktailInfo.drinks[0].strIngredient2)}>
                            <img
                                className="m-0"
                                alt={cocktailInfo.drinks[0].strIngredient2}
                                src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient2)}
                            />
                            <p>{cocktailInfo.drinks[0].strIngredient2}</p>
                        </div>
                    </td>
                    <td>
                        <div onClick={ () => handleIngridientClick(cocktailInfo.drinks[0].strIngredient3)}>
                            <img
                                className="m-0"
                                src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient3)}
                                alt={cocktailInfo.drinks[0].strIngredient3}
                            />
                            <p>{cocktailInfo.drinks[0].strIngredient3}</p>
                        </div>
                    </td>
                    <td>
                        <div onClick={ () => handleIngridientClick(cocktailInfo.drinks[0].strIngredient4)}>
                            <img
                                className="m-0"
                                src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient4)}
                                alt={cocktailInfo.drinks[0].strIngredient4}
                            />
                            <p>{cocktailInfo.drinks[0].strIngredient4}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div onClick={ () => handleIngridientClick(cocktailInfo.drinks[0].strIngredient5)}>
                            <img
                                className="m-0"
                                src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient5)}
                                alt={cocktailInfo.drinks[0].strIngredient5}
                            />
                            <p>{cocktailInfo.drinks[0].strIngredient5}</p>
                        </div>
                    </td>
                    <td>
                        <div onClick={ () => handleIngridientClick(cocktailInfo.drinks[0].strIngredient6)}>
                            <img
                                className="m-0"
                                src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient6)}
                                alt={cocktailInfo.drinks[0].strIngredient6}
                            />
                            <p>{cocktailInfo.drinks[0].strIngredient6}</p>
                        </div>
                    </td>
                    <td>
                        <div onClick={ () => handleIngridientClick(cocktailInfo.drinks[0].strIngredient7)}>
                            <img
                                className="m-0"
                                src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient7)}
                                alt={cocktailInfo.drinks[0].strIngredient7}
                            />
                            <p>{cocktailInfo.drinks[0].strIngredient7}</p>
                        </div>
                    </td>
                    <td>
                        <div onClick={ () => handleIngridientClick(cocktailInfo.drinks[0].strIngredient8)}>
                            <img
                                className="m-0"
                                src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient8)}
                                alt={cocktailInfo.drinks[0].strIngredient8}
                            />
                            <p>{cocktailInfo.drinks[0].strIngredient8}</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Ingridiants;