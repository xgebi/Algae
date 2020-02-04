import basic from './basic';
import status from './status';
import taxonomy from './taxonomy';

export const state = {

};

export default {
    namespaced: true,
    state,
    modules: {
        basic,
        status,
        taxonomy
    }
}