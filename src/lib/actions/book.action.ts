



export default async function getBooks(userInfo: any) {
    const interests = userInfo?.interests; // assuming interests is an array of strings
 // replace with your actual API key
    const query = interests?.join(' | '); // join interests with ' OR ' for the search query
    const querys= encodeURIComponent(query);
    const url = `https://openlibrary.org/search.json?q=${querys}&limit=9`;
    try {   
      const response = await fetch(url);
      const data = await response.json()
      return data; // return the articles array
    } catch (error) {
      console.error(error);
      // Handle the error here, e.g. by displaying an error message to the users
      
    }
  }