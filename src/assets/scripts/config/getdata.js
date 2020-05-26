import fetchJsonp from 'fetch-jsonp';
import moment from 'moment';

const expirationLimit = [2, 'days']; // two days cache;

const getData = async (loadDataHook, setErrorHook) => {
	// load from LocalStorage
	const today = moment();
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
		const expirationDate = moment(createdAt)
			.add(expirationLimit[0], expirationLimit[1]);

		// If data has expired
		if (moment(today).isSameOrAfter(expirationDate)) {
			localStorage.removeItem(saveName);
			loadData();
		} else {
			loadDataHook(json);
		}
	}
};

export default getData;
