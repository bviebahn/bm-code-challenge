import { useState  } from "react";
import Button from "../Button";
import Input from "../Input";
import './styles.css';

const PlusSelection = ({ onSelect }: { onSelect: (value: string ) => void} ) => {

	const [plusPassword, setPlusPassword] = useState("");
	const handlePassword = () => onSelect(plusPassword);

	return (
		<div className="container">
			<Button title="No, I'm first time here" value="" onClick={handlePassword}/>
			<div className="plusContainer">
				<Input value={plusPassword} name="pluscode" onChange={setPlusPassword} placeholder="Put your plus password here" />
				<Button title="Yes, I'm already BM-PLUS customer" value="" onClick={handlePassword}/>
			</div>
		</div>
  	)
}

export default PlusSelection;
