
"use server"


export async function getBooks(userInfo: any) {
    const interests = userInfo?.interests; // assuming interests is an array of strings
 // replace with your actual API key
    const query = interests?.join(' OR '); // join interests with ' OR ' for the search query
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


  
  export async function getBookCovers(userInfo: any) {
    // Fetching books based on interest
    const booksData = await getBooks(userInfo);
    const books = booksData.docs; // Accessing the 'docs' property for book information

    let covers = [];
    for (let book of books) {
        if (book.cover_i) {
            const coverID = book.cover_i;
            const url = `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`;
            covers.push(url);
        }
    }
    return covers; // Return an array of cover URLs
}