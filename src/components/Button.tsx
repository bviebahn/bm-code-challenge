

type ButtonProps = {
    title: string;
    value: string | number;
    onClick: (value: string | number ) => void;
}

const Button = ({ title, value, onClick }: ButtonProps) => {
    return (
        <button value={value} onClick={() => onClick(value)}>{ title }</button>
    )
};

export default Button;
