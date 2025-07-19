import './Input.style.css';

const InputType = ({InputHandler}) => {
    return (
        <>
        <input className="input-container" type="search" onChange={InputHandler}  />
        </>
    );
};
export default InputType;