const PostService = {
	async getPost(token, postUuid) {
		const response = await fetch(process.env.VUE_APP_API_URL + "api/post/" + postUuid, {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Token ${token}`
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *client
		});
		return await response.json();
	},

	async savePost(token, post) {
		const response = await fetch(`${process.env.VUE_APP_API_URL}api/post/${post.uuid}`, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Token ${token}`
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *client
			body: JSON.stringify(post)
		});
		return await response.json();
	},

	async getDifferentLanguagePost(token, postUuid, language) {
		const response = await fetch(`${process.env.VUE_APP_API_URL}api/post/${postUuid}/${language}`, {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Token ${token}`
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *client
		});
		return await response.json();
	},
};

export default PostService;