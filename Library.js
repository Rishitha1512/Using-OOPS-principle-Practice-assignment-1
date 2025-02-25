// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    // Method to borrow a book
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You have borrowed: ${this.title}`);
        } else {
            console.log(`Sorry, the book "${this.title}" is currently unavailable.`);
        }
    }

    // Method to return a book
    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`You have returned: ${this.title}`);
        } else {
            console.log(`This book "${this.title}" was not borrowed.`);
        }
    }
}

// User Class
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    // Method to borrow a book
    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
        } else {
            console.log(`${this.name} cannot borrow the book "${book.title}" as it is unavailable.`);
        }
    }

    // Method to return a book
    return(book) {
        const bookIndex = this.borrowedBooks.indexOf(book);
        if (bookIndex !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(bookIndex, 1);
        } else {
            console.log(`${this.name} did not borrow the book "${book.title}".`);
        }
    }
}

// Test the Library Management System
function testLibrarySystem() {
    // Create Book instances
    const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565');
    const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '9780061120084');
    const book3 = new Book('1984', 'George Orwell', '9780451524935');

    // Create User instances
    const user1 = new User('Alice', 1);
    const user2 = new User('Bob', 2);

    // User borrows books
    user1.borrow(book1);
    user2.borrow(book1); 
    user1.return(book1);
    user2.borrow(book1); 

    // User borrows and returns multiple books
    user1.borrow(book2); 
    user1.borrow(book3);
    user1.return(book2); 
    user1.return(book3);
}

testLibrarySystem();
