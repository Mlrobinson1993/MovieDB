const APIKEY = '6f32003947e7229ee7d08ab221d59494';
//documentation: https://developers.themoviedb.org/3/getting-started/introduction
//api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6f32003947e7229ee7d08ab221d59494

//url /discover/movie?sort_by=popularity.desc

export const getData = (url, cb, page) => {
	if (page) {
		console.log('with page');
		try {
			fetch(`${url}${APIKEY}&page=${page}`)
				.then((res) => res.json())
				.then((data) => cb(data));
		} catch (error) {
			console.log(error);
		}
	} else {
		console.log('without page');
		try {
			fetch(`${url}${APIKEY}`)
				.then((res) => res.json())
				.then((data) => cb(data));
		} catch (error) {
			console.log(error);
		}
	}
};
