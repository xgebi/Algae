import { Getter } from 'vuex';

export interface EditorState {
	initialState: number
}

export interface GetterTree<S, R> {
	[key: string]: Getter<S, R>;
}