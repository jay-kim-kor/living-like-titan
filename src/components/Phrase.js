import styled from 'styled-components';

const PhraseText = styled.p`
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
`
export function Phrase() {
    return (
        <>
            <PhraseText>습관이란 인간으로 하여금 어떤 일이던 하게 만든다.</PhraseText>
        </>
    )
    
}