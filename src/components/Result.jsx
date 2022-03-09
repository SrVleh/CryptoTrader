import styled from '@emotion/styled';

const Result = ({ tradeResult }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = tradeResult
    return (
        <div>
            <p>Price is:  <span>{ PRICE }</span></p>
            <p>Highest price:  <span>{ HIGHDAY }</span></p>
            <p>Lowest price:  <span>{ LOWDAY }</span></p>
            <p>Variation in the last 24 hours:  <span>{ CHANGEPCT24HOUR }</span></p>
            <p>Last update:  <span>{ LASTUPDATE }</span></p>
        </div>
    );
}

export default Result;
