import * as types from "./actionTypes";

export function createHero(hero){
    return { type: types.CREATE_HERO, hero };
}