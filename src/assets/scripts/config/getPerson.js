import fetchJsonp from 'fetch-jsonp';

const getPerson = async (personId, loadDataHook, setErrorHook) => {
	// load from LocalStorage
	const loadData = async () => {
		try {
			const url = `//media.folha.uol.com.br/cotidiano/2020/03/31/mortescovid19/${personId}.json?callback=person${personId}`;
			const result = await fetchJsonp(url, {
				jsonpCallbackFunction: `person${personId}`,
				timeout: 5000,
			});
			const json = await result.json();

			loadDataHook(json);
		} catch (err) {
			setErrorHook(err);
		}
	};

	loadData();
};

export default getPerson;
