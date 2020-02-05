import basic from './basic';
import status from './status';
import taxonomy from './taxonomy';
import includes from './includes';

export const state = {

};

export default {
    namespaced: true,
    state,
    modules: {
        basic,
        status,
        taxonomy,
        includes
    }
}