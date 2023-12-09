/**
 * Filename: sophisticated_code_example.js
 * Content: A sophisticated, elaborate, and complex code example in JavaScript.
 */

// Define an array of objects representing books
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publicationYear: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    publicationYear: 1960,
  },
  // ... more book objects ...
];

// Create a class representing a Library
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookId) {
    this.books = this.books.filter((book) => book.id !== bookId);
  }

  findBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  findBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }

  findBooksByPublicationYear(publicationYear) {
    return this.books.filter((book) => book.publicationYear === publicationYear);
  }

  getBookById(bookId) {
    return this.books.find((book) => book.id === bookId);
  }
}

// Create an instance of the Library class
const myLibrary = new Library("My Library");

// Add books to the library
books.forEach((book) => myLibrary.addBook(book));

// Perform various operations on the library
console.log(myLibrary.findBooksByAuthor("Harper Lee"));
console.log(myLibrary.findBooksByGenre("Classic"));
console.log(myLibrary.findBooksByPublicationYear(1925));

myLibrary.removeBook(2);
console.log(myLibrary.books);

console.log(myLibrary.getBookById(1));

// Output:
// [
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', publicationYear: 1960 }
// ]
// [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', publicationYear: 1925 },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', publicationYear: 1960 }
// ]
// [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', publicationYear: 1925 }
// ]
// [ { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', publicationYear: 1925 } ]