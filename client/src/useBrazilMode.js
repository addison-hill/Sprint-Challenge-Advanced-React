import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from 'react';

function useBrazilMode(key, initialValue) {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);
    const body = document.querySelector('body');

    useEffect(() => {
        if(someValue) {
            body.classList.add('brazil-mode');
        } else {
            body.classList.remove('brazil-mode');
        }
    },[someValue])

    return [someValue, setSomeValue];
}

export default useBrazilMode;