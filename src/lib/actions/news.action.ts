"use server"

export default async function getNews(userInfo:any) {

    const interests = userInfo?.interests; // assuming interests is an array of strings
    const apiKey = '3770aa9b63bdf22dad53c34c337114ce';
    const query = interests?.join(' OR '); // join interests with ' OR ' for the search query

    const encodedQuery = encodeURIComponent(query);

    const fromDate = new Date(new Date().getTime() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T00:00:00Z';
    const toDate = new Date().toISOString();

    // Include the encoded query in the URL
    const url = `https://gnews.io/api/v4/search?q=${encodedQuery}&lang=en&max=9&apikey=${apiKey}&sortby=relevance&from=${fromDate}&to=${toDate}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        // Handle the error here, e.g. by displaying an error message to the user
    }
}