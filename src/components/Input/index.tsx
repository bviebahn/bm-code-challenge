
import './styles.css';

type InputProps = {
    name: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string
}

const Input = ({ name, value, placeholder, onChange }: InputProps) => {
    return (
        <input type="text" name={name} value ={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value )} />
    )
} ;

export default Input;
