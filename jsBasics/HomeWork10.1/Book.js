class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }
  set title(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this._title = value;
    } else {
      console.error("Invalid title");
    }
  }

  set author(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this._author = value;
    } else {
      console.error("Invalid author");
    }
  }

  set year(value) {
    if (typeof value === "number" && value > 0) {
      this._year = value;
    } else {
      console.error("Invalid year");
    }
  }
  printInfo() {
    console.log(
      `Book: "${this.title}", Author: ${this.author}, year: ${this.year}`
    );
  }

  static findOldestBook(books) {
    return books.reduce((oldest, current) => {
      return current.year < oldest.year ? current : oldest;
    });
  }
}

export default Book;

const book1 = new Book("testbook1", "testAuthor1", 1800);
const book2 = new Book("testbook2", "testAuthor2", 1900);
const book3 = new Book("testbook3", "testAuthor3", 2000);

book1.printInfo();
book2.printInfo();
book3.printInfo();
