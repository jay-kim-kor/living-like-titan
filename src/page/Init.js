import { Logo } from '../components/Logo';
import { Phrase } from '../components/Phrase';
import { SignApple } from '../components/SignApple';
import { Link } from 'react-router-dom';

export default function Init() {
    return (
        <>
            <Logo />
            <Phrase />
            <SignApple onClick={<Link to='/create-routine' />} />
        </>
    );
}