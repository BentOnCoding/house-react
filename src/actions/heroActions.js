import * as types from "./actionTypes";
import heroApi from "../api/mockHeroApi";

export function loadHeroesSuccess(heroes){
    return { type: types.LOAD_HEROES_SUCCESS, heroes };
}

export function loadHeroes(){

    return function(dispatch){
        return heroApi.getAllHeroes().then(heroes => {
            dispatch(loadHeroesSuccess(heroes));
        })
        .catch(err => {
            throw(err);
        });
    };
}