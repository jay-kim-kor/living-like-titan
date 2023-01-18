import styled from 'styled-components';

const LogoText = styled.div`
    font-family: 'Canela Text';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
`;

export function Logo() {
    return (
        <>
            <LogoText>{`Living
            like Titan`}</LogoText>
            <LogoText>Living<br />like Titan</LogoText>
        </>
    )
}