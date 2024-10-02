import Book from "./Book.js";

class Ebook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }
  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this._fileFormat = value;
    } else {
      console.error("Invalid file format");
    }
  }

  printInfo() {
    console.log(
      `Book: "${this.title}", Author: ${this.author}, year: ${this.year},Format: ${this.fileFormat}`
    );
  }

  static fromBook(bookInstance, fileFormat) {
    return new Ebook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}

const ebook1 = new Ebook("EBook1", "EAuthor1", 1700, "FB2");
const ebookFromBook = Ebook.fromBook(ebook1, "PDF");
ebookFromBook.printInfo();


export default Ebook;
