import { createStore } from "redux";

const initialState = {
    cocktailSearchResults: {},
    ingridiantSearchResults: {},
    categorySearchResults: {},
    glassSearchResults: {},
    alcoholicSearchResults: {},
    cocktailInfo: {},
    slideshowIndex: 0,
    searchText: '',
    lastVisitedURL: '',
    favouritCocktails: {},
    cocktailSuggestions: {}

};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'searchText/changed':
            return {
                ...state,
                searchText: action.payload
            }
        case 'cocktailSearchResults/added':
            return {
                ...state,
                cocktailSearchResults: action.payload
            }
        case 'ingridiantSearchResults/added':
            return {
                ...state,
                ingridiantSearchResults: action.payload
            }
        case 'categorySearchResults/added':
            return {
                ...state,
                categorySearchResults: action.payload
            }
        case 'glassSearchResults/added':
            return {
                ...state,
                glassSearchResults: action.payload
            }
        case 'alcoholicSearchResults/added':
            return {
                ...state,
                alcoholicSearchResults: action.payload
            }
        case 'cocktailInfo/added':
            return {
                ...state,
                cocktailInfo: action.payload
            }
        case 'slideshowIndex/added':
            return {
                ...state,
                slideshowIndex: action.payload
            }
        case 'lastVisitedURL/added':
            return {
                ...state,
                lastVisitedURL: action.payload
            }
        case 'favouritCocktails/added':
            let favourits = { ...state.favouritCocktails };
            if (action.payload.idDrink in favourits) {
                delete favourits[action.payload.idDrink]
            } else {
                favourits[action.payload.idDrink] = action.payload;
            }
            return {
                ...state,
                favouritCocktails: favourits
            }
        case 'cocktailSuggestions/added':
            let suggestion;
            const shuffledCocktails = action.payload.drinks.sort( () => 0.5 - Math.random)
            if (shuffledCocktails.length > 4) {
                suggestion = shuffledCocktails.slice(0, 4)
            } else {
                suggestion = shuffledCocktails
            }
            return {
                ...state,
                cocktailSuggestions: suggestion
            }
        default:
            return state
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);