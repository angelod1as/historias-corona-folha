import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Config
import getData from '../../config/getdata';
import getPerson from '../../config/getPerson';

// Componentes
import Loading from '../common/loading';
import Error from '../common/error';
import Center from './center';
import Right from './right';
import Left from './left';

// Functions

const Profile = () => {
	const { id } = useParams();

	// for person information
	const [personData, setPersonData] = useState([]);
	const [error, setError] = useState();

	// for right side list
	const [listData, setListData] = useState();
	const [listError, setListError] = useState();

	const personId = id.split('-')[0];

	useEffect(() => {
		getPerson(personId, setPersonData, setError);
	}, [id]);

	useEffect(() => {
		getData(setListData, setListError);
	}, []);

	const CenterComp = () => {
		if (error) {
			return <Error />;
		}
		if (personData.length <= 0) {
			return <Loading />;
		}
		return <Center person={personData[0]} />;
	};

	const LeftComp = () => {
		if (error) {
			return <Error />;
		}
		if (personData.length <= 0) {
			return <Loading />;
		}
		return <Left person={personData[0]} />;
	};

	const RightComp = () => {
		if (listError) {
			return <Error />;
		}
		if (!listData) {
			return <Loading />;
		}
		return <Right data={listData} />;
	};

	return (
		<div className="profile">
			<LeftComp />
			<CenterComp />
			<RightComp />
		</div>
	);
};

export default Profile;
