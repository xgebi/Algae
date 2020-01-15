import { MutationTree } from 'vuex';
import { GeneralState, User } from './types';

export const mutations: MutationTree<GeneralState> = {
    profileLoaded(state, payload: User) {
        state.user = payload;
    },
    profileError(state) {
        state.user = undefined;
    }
};