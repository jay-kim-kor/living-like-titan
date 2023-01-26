import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RoundBlackBox = styled.div`
    font-family: 'Gmarket Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: left;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 245px;
    height: 50px;

    color: white;
    background-color: black;
    border-radius: 100px;
`;
export function SignApple() {
    return (
        <Link to='/create-routine'>
            <RoundBlackBox>
                <i className="fa-brands fa-apple" />Sign in with Apple
            </RoundBlackBox>    
        </Link>
    )
}