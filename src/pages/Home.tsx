import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PlusSelection from '../components/PlusSelection';

const Home = () => {

	const [selected, setSelected] = useState<boolean>(false);
	const handleSetCustomer = (_value: string) => setSelected(true);

	if(selected) {
		return <Navigate replace to="/catalog" />
	}

	return (
		<div className="page">
			<h1>Welcome to Bringmeister Plus</h1>
			<p>One of the most biggest advantage of our loyalty program is a pricing model.</p>
			<p>Are you already a PLUS customer?</p>
			<PlusSelection onSelect={handleSetCustomer}/>
		</div>
	);
};

export default Home;
