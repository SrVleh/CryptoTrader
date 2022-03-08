import styled from "@emotion/styled";

const Text = styled.div`
    background-color: #d14f4f;
    color: #fff;
    padding: 13px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "OpenSans", sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 8px;
`

const Error = ({ children }) => {
  return (
    <Text>
        { children }
    </Text>
  );
}

export default Error;
