import { useState } from 'react';
import { Logo } from '../components/Logo';

export default function Init() {
    const [routine, setRoutine] = useState('');
    
    return (
        <>
            <Logo />
            
        </>
    );
}