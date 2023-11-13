import axios from 'axios';
axios.defaults.baseURL = 'https://books-backend.p.goit.global/';
// Запит Перелік категорій книг
export async function fetchBooksCategory() {
  const response = await axios.get('/books/category-list');
  return response.data;
}

// async function getApi(searchImg, page, perPage) {
// const URL = 'https://pixabay.com/api/';
// const API_KEY = "40442533-4b6791bab363289733298af78";

//   try {
//     const response = await axios.get(
//       `${URL}?key=${API_KEY}&q=${searchImg}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
//     return response.data;

//   } catch (error) {
//     Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//   }

// }

// Запит Популярні книги, що належать до усіх категорій
export async function fetchAllTopBooks() {
  const response = await axios.get('/books/top-books');
  return response.data;
}

// Запит Книги окремої категорії
export async function fetchBooksBySelectedCategory(selectedCategory) {
  const response = await axios.get(
    `/books/category?category=${selectedCategory}`
  );
  return response.data;
}

// Запит Детальна інформація про книгу по id
export async function fetchBookById(bookId) {
  const response = await axios.get(`/books/${bookId}`);
  return response.data;
}

// fetchBooksCategory().then(response => console.log(response));
// fetchAllTopBooks().then(response => console.log(response));
// fetchBooksBySelectedCategory().then(response => console.log(response));
// fetchBookById('643282b1e85766588626a0dc').then(response =>
//   console.log(response)
// );
// console.log('hello');
