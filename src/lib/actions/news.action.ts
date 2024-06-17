"use server"


export default async function getNews(userInfo: any) {
  const interests = userInfo?.interests; // assuming interests is an array of strings
  const apiKey = '3b955669cb7443e4bdf7ecd9a33b464a'; // replace with your actual API key
  let articles = [];
  let page = 1;
  
  while (articles.length < 9) {
    const query = interests?.join(' OR '); // join interests with ' OR ' for the search query
    const encodedQuery = encodeURIComponent(query);
    const today = new Date();
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const fromDate = oneWeekAgo.toISOString().split('T')[0];
    const url = `https://newsapi.org/v2/everything?q=${encodedQuery}&from=${fromDate}&sortBy=relevancy&pageSize=100&page=${page}&apiKey=${apiKey}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();

      interface Article {
        source: { id: string | null; name: string | null };
        author: string | null;
        title: string;
        description: string;
        url: string;
        urlToImage: string | null;
        publishedAt: string;
        content: string;
      }
      
      // ... rest of your code ...

    const filteredArticles = data.articles.filter((article: Article) => !Object.values(article).includes('[Removed]'));

// ... rest of your code ...

      articles.push(...filteredArticles.slice(0, 9 - articles.length));
      page++;
    } catch (error) {
      console.error(error);
      // Handle the error here, e.g. by displaying an error message to the users
      break;
    }
    
    if (page > 10) { // Avoid too many API calls
      break;
    }
  }

  return articles.slice(0, 9); // return up to 9 valid articles
};
