import { heroes } from "../data/heroes";

export const getHeoreById = (id) => {

    return heroes.find( hero => hero.id === id );
}