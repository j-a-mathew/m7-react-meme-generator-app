let token = '0da5ed6b474fc6563798dbde1f9257f7038374d0b6306dd2'

export const server_calls = {
    get: async () => {
        const response = await fetch('https://meme-generator-ct-justin.herokuapp.com/api/memes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                // 'Access-Control-Allow-Origin': '*',
            },
            // mode: 'no-cors'
        });

        if (!response.ok){
            throw new Error("Failed to fetch data from the server!")
        }

        console.log(response.json());

        return await response.json();
    },

    create: async (data: any = {}) => {
        const response = await fetch('https://meme-generator-ct-justin.herokuapp.com/api/memes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error("Failed to create new data on the server!")
        }

        return await response.json();
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://meme-generator-ct-justin.herokuapp.com/api/memes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async (id: string) => {
        const response = await fetch(`https://meme-generator-ct-justin.herokuapp.com/api/memes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
    }
}