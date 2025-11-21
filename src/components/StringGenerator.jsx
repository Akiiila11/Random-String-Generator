import React, { useCallback, useEffect, useState } from 'react';
import { RiAiGenerateText } from "react-icons/ri";


const StringGenerator = () => {

    // useState
    const [randomString, setRandomString] = useState(" ");

    // useCallback
    const generateRandomString = useCallback( ()=> {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i=0; i<8; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result;
    }, []);

    // useEffect
    useEffect( ()=> {
        setRandomString(generateRandomString());
    },[generateRandomString]);


    return (
        <div className='flex flex-col items-center justify-center text-center h-150'>
            <h1 className='font-bold  text-4xl '>Random String Generator</h1>
            <p className='bg-amber-400 shadow-lg rounded-lg text-lg px-20 py-5 mt-8'>{randomString}</p>
            <button onClick={()=> setRandomString(generateRandomString())} className='bg-black text-white flex items-center px-2 py-2 rounded-lg mt-5 gap-2'>Generate New<RiAiGenerateText /></button>

        </div>
    );
};

export default StringGenerator;