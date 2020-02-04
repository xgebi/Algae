
export default {
	getInitialToken({ commit }) { // look what's goinging into action
		commit('setInitialToken', "123456")
	}
}