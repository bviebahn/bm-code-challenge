import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from "../components/Button";
import Input from "../components/Input";

//
const MembershipSelection = ({ onSelect }: { onSelect: (value: string ) => void} ) => {

	const [plusPassword, setPlusPassword] = useState("");
	const handlePassword = () => onSelect(plusPassword);

	return (
		<div>
			<Button title="No, I'm first time here" value="" onClick={handlePassword}/>
			<div>
				<Input value={plusPassword} name="pluscode" onChange={setPlusPassword} placeholder="Please put your plus password here" />
				<Button title="Yes, I'm already BM-PLUS customer" value="" onClick={handlePassword}/>
			</div>
		</div>
  	)
}

//
const Home = () => {

	const [, setCustomerPassword ] = useState<string>("");
	const [selected, setSelected] = useState<boolean>(false);

	const handleSetCustomer = (value: string) => {
		if(value.length) {
			setCustomerPassword(value);
		}
		setSelected(true);
	}

	if(selected) {
		return <Navigate replace to="/catalog" />
	}

	return (
		<div>
			<h1>Bringmeister Plus</h1>
			<p>One of the most biggest advantage of loyalty program is a pricing model in our shop. Are you already own a PLUS membership?</p>
			<MembershipSelection onSelect={handleSetCustomer}/>
		</div>
	);
};

export default Home;
