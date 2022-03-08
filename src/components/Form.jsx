import { useEffect } from "react";
import useSelectCurrency from "../hooks/useSelectCurrency";
import styled from "@emotion/styled";
import { currencies } from "../data/currency";

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
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
        
    }
`

const Form = () => {

    const [ currency, SelectCurrency ] = useSelectCurrency('Select your currency', currencies)

    useEffect(() => {
       const consumeAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
        const response = await fetch(url)
        const result = await response.json()
        console.log(result.Data)
       }
       consumeAPI()
    }, [])

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
