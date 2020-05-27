import fetchJsonp from 'fetch-jsonp';

const daysBeforeReload = 2; // in days;

const getData = async (loadDataHook, setErrorHook) => {
	// load from LocalStorage
	const today = Date.now();
	const saveName = 'FOLHA_CORONA_MEMORIAL_PaWvhCt43X';
	const loadedData = localStorage[saveName];

	const loadData = async () => {
		try {
			const result = await fetchJsonp('//media.folha.uol.com.br/cotidiano/2020/03/31/mortescovid19/index.json', {
				jsonpCallbackFunction: 'home_index',
				timeout: 5000,
			});
			const json = await result.json();

			localStorage[saveName] = JSON.stringify({
				createdAt: today,
				json,
			});
			loadDataHook(json);
		} catch (err) {
			setErrorHook(err);
		}
	};

	if (!loadedData) {
		loadData();
	} else {
		const { json, createdAt } = JSON.parse(loadedData);
		const expirationDate = new Date(createdAt).getTime();
		const expirationLimit = daysBeforeReload * 86400000; // days * one day in milliseconds
		const condition = today - expirationDate >= expirationLimit;
		if (condition) {
			localStorage.removeItem(saveName);
			loadData();
		} else {
			loadDataHook(json);
		}
	}
};

export default getData;
