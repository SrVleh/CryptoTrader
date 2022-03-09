import styled from '@emotion/styled';

const ResultContainer = styled.div`
    color: #fff;
    font-family: "OpenSans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
    text-align: center;
`

const Image = styled.img`
    display: block;
    width: 120px;

`

const Text = styled.p`
    font-size: 18px;

    span {
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;

    span {
        font-weight: 700;
    }
`

const Result = ({ tradeResult }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = tradeResult
    return (
        <ResultContainer>
            <div>
                <Price>Price is:  <span>{ PRICE }</span></Price>
                <Text>Highest price:  <span>{ HIGHDAY }</span></Text>
                <Text>Lowest price:  <span>{ LOWDAY }</span></Text>
                <Text>Variation in the last 24 hours:  <span>{ CHANGEPCT24HOUR }</span></Text>
                <Text>Last update:  <span>{ LASTUPDATE }</span></Text>
            </div>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`}></Image>
        </ResultContainer>
    );
}

export default Result;
