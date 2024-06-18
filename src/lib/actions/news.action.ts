// news.actions.ts
"use server";
import NodeCache from 'node-cache';

const oneWeekInSeconds = 7 * 24 * 60 * 60; // One week in seconds
const myCache = new NodeCache({ stdTTL: oneWeekInSeconds, checkperiod: 120 });

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

export const getNews = async (userInfo: any, refresh: boolean = false) => {
  const interests = userInfo?.interests; // assuming interests is an array of strings
  const apiKey = 'ce7e791d411a423f81a6e06e32609af7'; // replace with your actual API key
  const cacheKey = 'news-' + interests?.join('-');
  const cacheIndexKey = 'news-index-' + interests?.join('-');

  let cachedArticles = myCache.get<Article[]>(cacheKey) || [];
  let cacheIndex = myCache.get<number>(cacheIndexKey) || 0;

  // Check if cache should be refreshed (e.g., weekly)
  const shouldRefreshCache = refresh || isCacheExpired(cacheKey);
  
  if (!cachedArticles.length || shouldRefreshCache) {
    cachedArticles = await fetchArticlesFromAPI(interests, apiKey);
    myCache.set(cacheKey, cachedArticles);
    cacheIndex = 0;
  }

  if (shouldRefreshCache) {
    resetCacheExpiry(cacheKey);
  }

  const articlesToReturn = cachedArticles.slice(cacheIndex, cacheIndex + 12);
  myCache.set(cacheIndexKey, cacheIndex);

  return articlesToReturn;
};

async function fetchArticlesFromAPI(interests: string[], apiKey: string): Promise<Article[]> {
  const query = interests.join(' OR ');
  const encodedQuery = encodeURIComponent(query);
  const today = new Date();
  const oneWeekAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));
  const fromDate = oneWeekAgo.toISOString().split('T')[0];
  const url = `https://newsapi.org/v2/everything?q=${encodedQuery}&from=${fromDate}&sortBy=relevancy&language=en&pageSize=100&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.articles) {
      return data.articles.filter((article: Article) => !Object.values(article).includes('[Removed]')).slice(0, 100);
    } else {
      console.error('No articles found in the response');
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

function isCacheExpired(cacheKey: string): boolean {
  const cachedTime = myCache.getTtl(cacheKey); // Get remaining TTL in seconds
  return cachedTime === 0; // Cache is expired if remaining TTL is zero
}

function resetCacheExpiry(cacheKey: string): void {
  myCache.del(cacheKey); // Remove current cache
  // Optionally, you can reset other related cache data or indexes here
}

