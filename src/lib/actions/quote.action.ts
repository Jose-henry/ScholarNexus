
"use server"


export default async function getQuotes() {
        const url = 'https://api.quotable.io/quotes?limit=9&tag=inspirational|life|wisdom|philosophy|humor|success|pain|work';
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data; // return the articles array
        } catch (error) {
            console.error(error);
            // Handle the error here, e.g. by displaying an error message to the users
            
        }
    }