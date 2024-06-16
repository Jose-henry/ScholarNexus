

"use server"

export default async function getYoutube(userInfo: any) {
    const interests = userInfo?.interests; // assuming interests is an array of strings
    const apiKey = 'AIzaSyBVKd-rLT1bRD42RJaExTdK5emHyqcgHNg';
 // replace with your actual API key
    const query = interests?.join(' OR '); // join interests with ' OR ' for the search query


    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&maxResults=9&type=video&order=relevance&videoEmbeddable=true&videoSyndicated=true&safeSearch=strict`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.items; // return the articles array
    } catch (error) {
      console.error(error);
      // Handle the error here, e.g. by displaying an error message to the users
      
    }
  };

  