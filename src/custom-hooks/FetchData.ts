import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
    const [memeData, setData] = useState<[]>([]);

    async function handleDataFetch(){
        console.log("WAITING ON DATA")
        const result = await server_calls.get();
        console.log("PULLED DATA")
        setData(result)
    }

    // do something after render; after 1st render and every update
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {memeData, getData:handleDataFetch}
}
