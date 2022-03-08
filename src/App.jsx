import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Form from './components/Form'

import CryptoImg from './img/crypto_img.png'


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Img = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'OpenSans', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto auto;
  }
`

function App() {

  const [ currencies, setCurrencies ] = useState({})
  const [ tradeResult, setTradeResult ] = useState({})
  
  useEffect(() => {
    if(Object.keys(currencies).length > 0){
      const tradeCrypto = async () => {
        const { currency, crypto } = currencies
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
        const response = await fetch(url)
        const result = await response.json()
        setTradeResult(result.DISPLAY[crypto][currency])
      }

      tradeCrypto()
    }
  }, [currencies])

  return (
    <Container>
      <Img src={ CryptoImg } alt='crypto image'/>
      <div>
        <Heading>Trade cryptocurrency instantly</Heading>
        <Form
          setCurrencies={ setCurrencies }
        />
      </div>
    </Container>
  )
}

export default App
