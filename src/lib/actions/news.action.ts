"use server"

export default async function getNews(userInfo: any) {
    const interests = userInfo?.interests; // assuming interests is an array of strings
    const apiKey = '3b955669cb7443e4bdf7ecd9a33b464a'; // replace with your actual API key
    const query = interests?.join(' OR '); // join interests with ' OR ' for the search query
    const today = new Date();
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const fromDate = oneWeekAgo.toISOString().split('T')[0];


    const url = `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=relevancy&pageSize=9&apiKey=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.articles; // return the articles array
    } catch (error) {
      console.error(error);
      // Handle the error here, e.g. by displaying an error message to the user
      
    }
  };

  