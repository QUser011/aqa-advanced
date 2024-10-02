import Book from "./Book.js";
import Ebook from "./Ebook.js";

const book1 = new Book("testbook1", "testAuthor1", 1800);
const book2 = new Book("testbook2", "testAuthor2", 1900);
const book3 = new Ebook("testbook3", "testAuthor3", 2000, "FB2");
const ebook1 = new Ebook("EBook1", "EAuthor1", 1901, "FB2");

const booksArray = [book1, book2, book3, ebook1];

const oldestBook = Book.findOldestBook(booksArray);
console.log("The oldest book is:");
oldestBook.printInfo();
