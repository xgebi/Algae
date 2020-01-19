import { GetterTree } from 'vuex';
import { GeneralState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<GeneralState, RootState> = {
    token(state): string {
        const { user } = state;
        if (user) {
          return user.token;
        }
        return "";
    },

    post(state): object {
      return {}
    }
};