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
    favouritCocktails: {}

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
            if (action.payload in favourits) {
                delete favourits[action.payload]
            } else {
                favourits[action.payload] = true;
            }
            return {
                ...state,
                favouritCocktails: favourits
            }
        default:
            return state
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);