import useSelectCurrency from "../hooks/useSelectCurrency";
import styled from "@emotion/styled";

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 8px;
    transition: background-color .3s ease;
    
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
        
    }
`

const Form = () => {

    const [ SelectCurrency ] = useSelectCurrency('Select your currency')

    return (
        <form>   
            <SelectCurrency/>
            <InputSubmit 
                type="submit" 
                value='Trade'/>
        </form>
    );
}

export default Form;
