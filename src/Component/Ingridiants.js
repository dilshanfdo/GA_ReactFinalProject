import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import * as ReactBootstrap from 'react-bootstrap';

function Ingridiants() {

    const params = useParams();
    const history = useHistory();
    const cocktailInfo = useSelector(state => state.cocktailInfo);

    function getIngridiantImgs(ingridiant) {
        if (ingridiant === null || ingridiant === "") {
            return "";
        }
        return `https:www.thecocktaildb.com/images/ingredients/${ingridiant}-Small.png`;
    }

    return (
        <table className="table table-borderless table-sm">
            <tbody className="d-inline-block">
                <tr>
                    <td>
                        <img
                            className="m-0"
                            alt={cocktailInfo.drinks[0].strIngredient1}
                            src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient1)}
                        />
                        <p>{cocktailInfo.drinks[0].strIngredient1}</p>
                    </td>

                    <td>
                        <img
                            className="m-0"
                            alt={cocktailInfo.drinks[0].strIngredient2}
                            src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient2)}
                        />
                        <p>{cocktailInfo.drinks[0].strIngredient2}</p>
                    </td>
                    <td>
                        <img
                            className="m-0"
                            src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient3)}
                            alt={cocktailInfo.drinks[0].strIngredient3}
                        />
                        <p>{cocktailInfo.drinks[0].strIngredient3}</p>
                    </td>
                    <td>
                        <img
                            className="m-0"
                            src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient4)}
                            alt={cocktailInfo.drinks[0].strIngredient4}
                        />
                        <p>{cocktailInfo.drinks[0].strIngredient4}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img
                            className="m-0"
                            src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient5)}
                            alt={cocktailInfo.drinks[0].strIngredient5}
                        />
                        <p>{cocktailInfo.drinks[0].strIngredient5}</p>
                    </td>
                    <td>
                        <img
                            className="m-0"
                            src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient6)}
                            alt={cocktailInfo.drinks[0].strIngredient6}
                        />
                        <p>{cocktailInfo.drinks[0].strIngredient6}</p>
                    </td>
                    <td>
                        <img
                            className="m-0"
                            src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient7)}
                            alt={cocktailInfo.drinks[0].strIngredient7}
                        />
                        <p>{cocktailInfo.drinks[0].strIngredient7}</p>
                    </td>
                    <td>
                        <img
                            className="m-0"
                            src={getIngridiantImgs(cocktailInfo.drinks[0].strIngredient8)}
                            alt={cocktailInfo.drinks[0].strIngredient8}
                        />
                        <p>{cocktailInfo.drinks[0].strIngredient8}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Ingridiants;