import { ActionTree } from 'vuex';
import { GeneralState, User } from './types';
import { RootState } from '../types';


export const actions: ActionTree<GeneralState, RootState> = {
    fetchData({ commit }): any {
      fetch(process.env.VUE_APP_API_URL + '/api/post').then((result) => { console.log("Good") });
    }
};